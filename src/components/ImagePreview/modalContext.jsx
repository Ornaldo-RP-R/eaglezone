import React from "react";

const ModalContext = React.createContext({
  openModal: () => {},
  props: {},
});

export default ModalContext;
