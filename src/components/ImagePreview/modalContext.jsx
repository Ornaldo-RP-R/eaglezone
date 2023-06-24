import React from "preact/compat";

const ModalContext = React.createContext({
  openModal: () => {},
  props: {},
});

export default ModalContext;
