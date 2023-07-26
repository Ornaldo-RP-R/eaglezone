import { httpInstance, apiCallback } from "./config";

const affiliateHttp = httpInstance.create({ route: "Affiliate" });
/**
 * #{apiFunctionName} : createApi(   () => #{http promise}  );
 *   getLatestNews    : createApi(   () => http.get('news') );
 * */
//
export default {
  checkAffiliateCodeReq: apiCallback((code) => affiliateHttp.get(`CheckAffiliateCode?code=${code}`)),
  getAffiliateOrdersReq: apiCallback(() => affiliateHttp.get("GetAffiliateOrders")),
  getAffiliateLinksReq: apiCallback(() => affiliateHttp.get("GetAffiliateLinks")),
  createAffiliateLinkReq: apiCallback((params) => affiliateHttp.post("CreateLink", params)),
};
