import { h, render, Component } from "preact";

// Check if the code is running on the server
const isServer = typeof window === "undefined";

// Create a global 'React' variable
if (isServer) {
  globalThis.React = {
    createElement: h,
    Component: Component,
  };
} else {
  window.React = {
    createElement: h,
    Component: Component,
  };
}
