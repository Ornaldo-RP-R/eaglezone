import { useReducer, useRef, useEffect } from "preact/hooks";
import { windowSsr } from "./constants";

export function isDeviceTouchable() {
 return ('ontouchstart' in document.documentElement);
}
export function copyToClipboard(text) {
  const temp = document.createElement("textarea");
temp.style.position = "absolute";
  temp.style.left = "-9999px";
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}
export const email = "eagelzoneal@gmail.com";
export const phone = 355675386361
export const facebookName = "Eagle-Zone-Albania";
export const instagramName = 'eagle_zone_gaming';

const reducer = (state, action) => {
  const { type, name, value } = action || {};
  const newName = typeof value === "function" ? value(state[name]) : value;
  return type === "SET_STATE_AND_UPDATE_REF" ? { ...state, [name]: newName } : state;
};

export const useStateAndUpdateRef = (stateNaming, initialState, ref) => {
  const [name, actionName] = stateNaming || [];
  const [state, dispatch] = useReducer(reducer, { [name]: initialState });
  const setState = (value) => dispatch({ type: "SET_STATE_AND_UPDATE_REF", name, value });

  useEffect(() => {
    if (state?.[name] === undefined && JSON.stringify(state?.[name]) !== JSON.stringify(initialState))
      setState(initialState);
    ref.current[actionName] = setState;
    ref.current[name] = state?.[name];
  }, [actionName, name, state?.[name]]);

  return [state?.[name], setState];
};

export const useStatelessOf = (stateNamings, reference) => {
  const ref = useRef({});
  const statelessRef = reference || ref;
  const namings = Object.values(stateNamings || {});
  const result = {};

  for (let i = 0; i < namings.length; i++) {
    const stateNaming = namings[i];
    const [name, actionName] = stateNaming;
    const capitalizedizedName = name.charAt(0).toUpperCase() + name.slice(1);

    result[actionName] = (params) => statelessRef.current[actionName]?.(params);
    result[`get${capitalizedizedName}`] = () => statelessRef.current[name];
  }

  return { statelessRef, ...result };;
};


export function getDefaultModules(moduleContext) {
  const modules = {};
  for (const modulePath in moduleContext) {
    if (moduleContext.hasOwnProperty(modulePath)) {
      const moduleKey = modulePath.replace(/\.\/(.+)\.js$/, "$1");
      const module = moduleContext[modulePath];
      modules[moduleKey] = module.default;
    }
  }
  return modules;
}

export const generateUniqueId = (() => {
  let counter = 0;

  return (prefix = "") => {
    counter++;
    return `${prefix}${counter}`;
  };
})();

export function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(windowSsr?.document?.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

export function setCookie(cname, cvalue, cdays, domain = null) {
  let cookie = cname + "=" + cvalue + ";path=/";

  if (domain) {
    cookie += ";domain=" + domain;
  }

  if (cdays) {
    const date = new Date();
    date.setTime(date.getTime() + cdays * 24 * 60 * 60 * 1000);
    cookie += ";expires=" + date.toUTCString();
  }

  if (location.protocol === "https:") {
    cookie += ";samesite=none;secure=true";
  }

  document.cookie = cookie;
}

export const priceIn = (price,format) => {
  const formatBy = {
    lek: `${price.toLocaleString("en-AL")} Lek`,
  };
  return formatBy[format];
}