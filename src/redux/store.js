import createStore from "redux-zero";
import database from "../constants";

let persist = {
  user: { storage: database.storages.localStorage },
  cart: { storage: database.storages.localStorage },
  affiliateData: { storage: database.storages.cookie },
};
let initialState = { user: {}, cart: [] };
const persistKeys = Object.keys(persist);
persistKeys.forEach((key) => {
  const decodedKey = btoa(`Eagle_Zone_${key.toUpperCase()}`);
  const encodedData = (persist?.[key]?.storage || sessionStorage).getItem(decodedKey);
  initialState[key] = encodedData ? JSON.parse(atob(encodedData)) : null;
});

const store = createStore?.(initialState);

store.subscribe(() => {
  const state = store.getState();
  persistKeys.forEach((key) => {
    const encodedKey = btoa(`Eagle_Zone_${key.toUpperCase()}`);
    const encodedData = btoa(JSON.stringify(state?.[key]));
    (persist?.[key]?.storage || sessionStorage).setItem(encodedKey, encodedData);
  });
});

export default store;
