import database from "../../constants";
import { generateUniqueId } from "../../helpers";
import {
  CLOSE_IMAGE_PREVIEW_MODAL,
  ERROR,
  OPEN_IMAGE_PREVIEW_MODAL,
  REGISTER,
  START,
  SUCCESS,
  LOGIN,
  LOGOUT,
  REMOVE_ALERT,
  THROW_ALERT,
  SET_APP_LOADING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_FROM_CART,
  CHECK_AFFILIATE_CODE,
} from "../types";

const actions = {
  [REGISTER]: (status, data, params, state) =>
    actionByApi(status, data, params, state, "signUp", {
      [SUCCESS]: () => ({ signUp: null }),
    }),
  [LOGIN]: (status, data, params, state) => actionByApi(status, data, params, state, "user"),
  [CHECK_AFFILIATE_CODE]: (status, data, params, state) => actionByApi(status, data, params, state, "affiliateData"),
  [OPEN_IMAGE_PREVIEW_MODAL]: (imagePreviewModal) => ({ imagePreviewModal }),
  [CLOSE_IMAGE_PREVIEW_MODAL]: () => ({ imagePreviewModal: null }),
  [LOGOUT]: () => {
    const encodedKey = btoa(`Eagle_Zone_USER`);
    database.storages.localStorage.setItem(encodedKey, btoa(JSON.stringify(null)));
    return ({ user: null })
  },
  [REMOVE_ALERT]: (alertId, state) => {
    let clonedAlerts = [...state.alerts];
    clonedAlerts = clonedAlerts.filter(({ id }) => alertId && id !== alertId);
    return { alerts: clonedAlerts };
  },
  [THROW_ALERT]: (payload, state) => {
    let newAlerts = Array.isArray(payload) ? payload : [payload];
    newAlerts.forEach((m, index) => {
      if (!newAlerts[index].id) newAlerts[index].id = generateUniqueId("alert");
    });
    const alerts = [...(state?.alerts || []), ...(newAlerts || [])];
    return { alerts };
  },
  [SET_APP_LOADING]: (appLoading, state) => ({ appLoading: appLoading !== undefined ? appLoading : !state.appLoading }),
  [ADD_TO_CART]: (id, state) => {
    const quantities = (state.cart || []).reduce((acc, item) => acc + item?.quantity, 0);
    let newCart = [...(state.cart || []), { id, quantity: 1 }];
    if (quantities >= 4){
      let maxQuantityIndex = newCart.reduce(
        (prevId, item, id, arr) => (item.quantity > arr[prevId].quantity ? id : prevId),
        0
      );
      newCart[maxQuantityIndex].quantity--;
    } 
    return { cart: newCart };
  },
  [REMOVE_FROM_CART]: (id, state) => ({ cart: (state.cart || []).filter((item) => item?.id !== id) }),
  [UPDATE_FROM_CART]: ({ id, quantity }, state) => {
    const itemIndex = state.cart.findIndex((item) => item.id === id);
    let cart = [...state.cart];

    if (itemIndex !== -1) {
      if (quantity === 0) {
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].quantity = quantity;
      }
    } else {
      cart.push({ id, quantity });
    }

    return { cart };
  },
};


const actionByApi = (status, data, params, state, key, stateBy) => {
  const propsByKey = (key && getPropsByKey(key, status)) || {};
  const stateUpdates = stateBy?.[status]?.(status, data, params, state) || {};
  const commonState = { ...state, ...propsByKey };
  switch (status) {
    case SUCCESS:
      return { ...commonState, [key]: data, ...stateUpdates };
    case ERROR:
      return { ...commonState, [key]: null, ...stateUpdates };
    case START:
      return { ...commonState,...stateUpdates };
    default:
      return state;
  }
};

const propsByState = { 
  [SUCCESS]: { IsLoading: false, IsSuccess: true, IsError: false },
  [START]: { IsLoading: true, IsSuccess: false, IsError: false },
  [ERROR]: { IsLoading: false, IsSuccess: false, IsError: true },
}

const getPropsByKey = (key,phase) => {
  let props = {}
  Object.keys(propsByState[phase]).forEach(propKey => {
    props[`${key}${propKey}`] = propsByState[phase][propKey]
  })
  return props 
}

export default actions;
