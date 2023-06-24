import React, { useState, useImperativeHandle, forwardRef, useContext } from "react";
import ModalContext from "./modalContext";
import "./index.scss";

const ImagePreviewModal = forwardRef((imageProps, ref) => {
  const [modalProps, setModalProps] = useState(false);
  const modalContext = useContext(ModalContext);

  useImperativeHandle(ref, () => ({
    openModal: (props) => {
      document.body.classList.add("modal-opened");
      setModalProps(props);
    },
  }));

  const stopPropagation = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const closeModal = (e) => {
    document.body.classList.remove("modal-opened");
    stopPropagation(e);
    setModalProps(false);
  };

  return (
    <div className={`modal ${modalProps ? "show" : ""}`}>
      <div className="flex flex-col h-full w-full relative">
        <div className="modal__header">
          <span className="font-small">Image Preview</span>
          <span className="close-btn" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 375 375" width="20">
              <path d="M247 188 372 63c3-3 3-9 0-12L324 3a8 8 0 0 0-12 0L187 128 62 3c-3-3-9-3-12 0L2 51a8 8 0 0 0 0 12l126 125L2 313a8 8 0 0 0 0 12l48 47a8 8 0 0 0 12 0l125-125 125 125c3 4 9 4 12 0l48-47c3-4 3-9 0-12Zm0 0" />
            </svg>
          </span>
        </div>
        {modalProps && <img {...modalProps} />}
      </div>
    </div>
  );
});

export default ImagePreviewModal;
