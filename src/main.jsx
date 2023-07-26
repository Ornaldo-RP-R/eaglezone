import { render } from "preact";
import { App } from "./app";
import store from "./redux/store";
import { Provider } from "redux-zero/preact";
import "./main.scss";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
