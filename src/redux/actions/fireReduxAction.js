import store from "../store";
import actions from "./actions";

const fireReduxAction = (type, ...params) => {
  const { setState, getState } = store;
  const state = getState();
  const newState = actions[type]?.(...params, state);
  setState({ ...state, ...(newState || {})});
};

export default fireReduxAction;
