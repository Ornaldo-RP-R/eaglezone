import { useEffect, useState } from "preact/hooks";

let emptyError = "duhet plotesuar";

const Field = (props) => {
  const { className, onBlur, sameAs, error, showError, hideErrors, sameAsError, children, value, optional } = props;
  const [errors, setErrors] = useState([]);
  const [blurred, setBlurred] = useState(false);

  const updateErrors = (when, error) => {
    if (when) {
      if (!errors.includes(error)) !hideErrors && setErrors((prevErrors) => [...prevErrors, error]);
    } else if (errors.includes(error))
      !hideErrors && setErrors((prevErrors) => prevErrors.filter((err) => err !== error));
  };

  const handleBlur = (event) => {
    onBlur?.(event);
    if (!blurred) setBlurred(true);
  };

  useEffect(() => {
    if (blurred) {
      const isEmpty = !optional && (value || "")?.trim?.() === "";
      updateErrors(isEmpty, emptyError);
    }
  }, [value, blurred, optional]);

  useEffect(() => {
    if (sameAs !== undefined && sameAsError) updateErrors(blurred && value !== sameAs, sameAsError);
  }, [sameAs, value, blurred]);

  useEffect(() => {
    if (error !== undefined && showError !== undefined) updateErrors(blurred && !!showError, error);
  }, [error, blurred, showError]);

  return (
    <div class={`relative z-0 w-full ${className || ""}`}>
      {children(errors?.length, handleBlur)}
      {!hideErrors && (
        <span
          className={`text-red-700 block w-full font-small transition-opacity duration-500 min-h-[22px] ${
            blurred && !!errors?.length ? "opacity-100" : "opacity-0"
          }`}
        >
          {!!errors?.length ? errors[0] : ""}
        </span>
      )}
    </div>
  );
};

export default Field;
