import { ERROR, START, SUCCESS } from "../../types";
import fireReduxAction from "../fireReduxAction"

const handleError = (type, error, params) => {
  const { response, data } = error;
  let errors = response?.data?.errors || data?.errors || (data?.message && [data?.message]);
  fireReduxAction(type,ERROR, errors, params);
  throw errors;
};

const handleSuccess = (type, response, params) => {
  fireReduxAction(type,SUCCESS, response?.data || {}, params);
  return response?.data;
}; 

export const createAction = (type, apiFunction, ...params) => {
  fireReduxAction(type, START, undefined, ...params);
  const handleActionError = (error) => handleError(type, error, ...params);
  const handleActionSuccess = (response) => handleSuccess(type, response, ...params);
  return apiFunction(...params).onSuccess(handleActionSuccess, handleActionError, false);
};
