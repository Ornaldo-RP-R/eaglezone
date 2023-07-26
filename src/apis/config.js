import axios from "axios";
import { SUCCESS, ERROR, THROW_ALERT } from "../redux/types";
import database from "../constants";
import store from "../redux/store";
import fireReduxAction from "../redux/actions/fireReduxAction";

const modifyResponse = (res) => {
  let response = {...(res || {})}
  const { data } = response || {};
  const successfulResponse = response && response.status >= 200 && response.status <= 299;
  return { type: successfulResponse ? SUCCESS : ERROR, response, data };
};

const onError = (err) => {
  const { response } = err || {};
  if (response?.data?.errors === "Missing user token.") {
    const accountId = (response?.config?.url || "").split("/")?.[1];
    window.location.href = `${window.location.origin}/#/accounts/${accountId}`;
  }
  if (response?.statusText === "Unauthorized") {
    // logout();
  }
  return modifyResponse(response);
};

export const httpInstance = {
  instance: null,
  useInterceptors(contentType = "application/json; charset=utf-8") {
    this.instance.interceptors.request.use((config) => {
      const Authorization = `Bearer ${store?.getState?.()?.user?.Token}`;
      config.headers = { "Content-Type": contentType, ...(Authorization ? {Authorization} : {}) };
      return config;
    });
    this.instance.interceptors.response.use(modifyResponse, onError);
  },
  create(configs, contentType = "application/json; charset=utf-8") {
    const {route} = configs || {}
    const baseURL = `${database.baseURL}${route}`;
    this.instance = axios.create({ baseURL });
    this.useInterceptors(contentType);
    return this.instance;
  },
};

export const apiCallback =
  (promise) =>
  (...params) => ({
    promise: promise(...params),
    then(callback, ...params) {
      this.promise.then((res) => callback(res?.response), ...params).catch(onError);
      return this;
    },
    finally(callback, ...params) {
      this.promise.finally((res) => callback(res?.response), ...params).catch(onError);
      return this;
    },
    catch(callback) {
      this.promise.catch((res) => {
        onError(res?.response);
        return callback(res?.response);
      });
      return this;
    },
    get() {
      return this.promise;
    },
    onSuccess(callback, failCallback = () => {}, shouldFireAlert = true) {
      this.promise
        .then((res) => {
          const { type, response } = res || {};
          const { data: errMessage } = response || {};
          const {Errors} = errMessage || {};
          const errorMessages = Errors?.length && Errors.join(`\n`);
          const defaultMessage = "Oooops dicka shkoi keq!"
          const message = errorMessages || errMessage || defaultMessage;
          const fireAlert = (type) => shouldFireAlert && message && fireReduxAction(THROW_ALERT,{ type, message });
          if (type === ERROR || errorMessages) {
            fireAlert(ERROR);
            failCallback && failCallback?.(response);
          } else if (type === SUCCESS) {
            //   fireAlert("success");
            callback && callback(response);
          } else if (failCallback) failCallback?.(response);
        }, failCallback)
        .catch(() => {});
      return this;
    },
  });
