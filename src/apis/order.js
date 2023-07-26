import { httpInstance, apiCallback } from "./config";

const orderHttp = httpInstance.create({ route: "Order" });
/**
 * #{apiFunctionName} : createApi(   () => #{http promise}  );
 *   getLatestNews    : createApi(   () => http.get('news') );
 * */
//
export default {
  createOrderReq: apiCallback((params) => orderHttp.post("CreateOrder", params)),
};
