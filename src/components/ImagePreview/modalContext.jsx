import { createContext } from "preact/compat";

const ModalContext = createContext({
  openModal: () => {},
  props: {},
});

export default ModalContext;
