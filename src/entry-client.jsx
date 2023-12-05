// entry-client.jsx
import { hydrate, render } from "preact";
import Main from "./main";

// hydrate the Main component on the client
const rootElement = document.getElementById("app");

const app = <Main />;
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}
