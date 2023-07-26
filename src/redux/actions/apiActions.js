import apiRequests from "../../apis/index";
import { createAction } from "./config/createAction";

const getActionFromApi = (apiFunctionName) => {
  const actionName = apiFunctionName.replace("Req", "");
  const type = actionName.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
  return {
    [actionName]: (...params) => createAction(type, apiRequests[apiFunctionName], ...params),
  };
};

export default Object.assign({}, ...Object.keys(apiRequests).map(getActionFromApi));
