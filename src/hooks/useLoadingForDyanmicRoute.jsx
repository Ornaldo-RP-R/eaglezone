import { useEffect } from "preact/hooks";
import { SET_APP_LOADING } from "../redux/types";
import fireReduxAction from "../redux/actions/fireReduxAction";

const useLoadingForDyanmicRoute = () => {
  useEffect(() => {
    fireReduxAction(SET_APP_LOADING, false);
  }, []);
};

export default useLoadingForDyanmicRoute;
