import { useState } from "preact/hooks";
import fireReduxAction from "../../redux/actions/fireReduxAction";
import { REMOVE_ALERT, SUCCESS } from "../../redux/types";

const Alert = (props) => {
  const { message, type, id } = props;
  const classNameKey = `${id || ""}${message || ""}`;
  const [className, setClassName] = useState({ [classNameKey]: "" });

  const startTransition = () => setClassName({ [classNameKey]: "start-hide" });

  const close = () => {
    startTransition();
    setTimeout(() => {
      fireReduxAction(REMOVE_ALERT, id);
    }, 300);
  };

  return (
    <div className={`alert__fade ${className[classNameKey] || ""} mb-2`}>
      <div className="alert-wrapper">
        <div className={`alert m-0 p-0 ${type || SUCCESS}`}>
          <div className="alert__border w-full" onAnimationEnd={close} />
          <div className="alert__content w-full">
            <div className="text-white-700 mb-0 w-full relative">
              <div className="alert__icon__container inline-flex items-center justify-center absolute">
                <i className="alert__icon" />
              </div>

              <button
                className="alert__close cursor-pointer inline-flex items-center justify-center p-0"
                onClick={close}
              >
                <i className="alert__close__icon inline-flex items-center justify-center " />
              </button>

              <p className="alert__content__text mb-0 font-small">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
