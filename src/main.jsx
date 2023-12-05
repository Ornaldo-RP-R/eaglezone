import { App } from "./app";
import store from "./redux/store";
import { Provider } from "redux-zero/preact";
import "./main.scss";

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;
