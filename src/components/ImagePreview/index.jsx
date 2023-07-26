import { connect } from "redux-zero/preact";
import fireReduxAction from "../../redux/actions/fireReduxAction";
import "./index.scss";
import { CLOSE_IMAGE_PREVIEW_MODAL } from "../../redux/types";

const ImagePreviewModal = ({ imagePreviewModal }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleCloseModal = (e) => {
    document.body.classList.remove("modal-opened");
    stopPropagation(e);
    fireReduxAction(CLOSE_IMAGE_PREVIEW_MODAL);
  };

  return (
    <div className={`modal ${imagePreviewModal ? "show" : ""}`}>
      <div className="flex flex-col h-full w-full relative">
        <div className="modal__header">
          <span className="font-small">Image Preview</span>
          <span className="close-btn" onClick={handleCloseModal}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 375 375" width="20">
              <path d="M247 188 372 63c3-3 3-9 0-12L324 3a8 8 0 0 0-12 0L187 128 62 3c-3-3-9-3-12 0L2 51a8 8 0 0 0 0 12l126 125L2 313a8 8 0 0 0 0 12l48 47a8 8 0 0 0 12 0l125-125 125 125c3 4 9 4 12 0l48-47c3-4 3-9 0-12Zm0 0" />
            </svg>
          </span>
        </div>
        {imagePreviewModal && <img {...imagePreviewModal} />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ imagePreviewModal }) => ({ imagePreviewModal });

export default connect(mapStateToProps)(ImagePreviewModal);
