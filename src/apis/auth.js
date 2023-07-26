import { httpInstance, apiCallback } from "./config";

const authHttp = httpInstance.create({ route: 'Authenticate' });
/**
 * #{apiFunctionName} : createApi(   () => #{http promise}  );
 *   getLatestNews    : createApi(   () => http.get('news') );
 * */
//
export default {
  registerReq: apiCallback((params) => authHttp.post("Register", params)),
  loginReq: apiCallback((params) => authHttp.post("Login", params)),
};
