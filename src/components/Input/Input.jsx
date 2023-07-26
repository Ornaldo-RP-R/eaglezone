import { Fragment } from "preact";
import "./index.scss";
import Field from "../Field/Field";

const Input = (props) => {
  const {
    id,
    name,
    hideErrors,
    placeholder,
    className,
    required,
    onBlur,
    sameAs,
    error,
    showError,
    sameAsError,
    isOutlined,
    optional,
    ...otherProps
  } = props;
  return (
    <Field {...{ className, hideErrors, optional, onBlur, value: props.value, sameAs, error, showError, sameAsError }}>
      {(errLength, handleBlur) => (
        <Fragment>
          <input
            id={name}
            className={`block p-3 w-full text-white-900 dark:text-gray-900 bg-gray-900 dark:bg-white-900 transition-all	 ${
              isOutlined ? "border  rounded-lg" : "border-0 border-b rounded-t-lg"
            } appearance-none  focus:ring-0 focus:border-white-900 dark:focus:border-gray-900 peer ${
              errLength ? "border-red-600" : "border-gray-600 dark:border-white-600"
            }`}
            placeholder=" "
            name={name}
            onBlur={handleBlur}
            required={required}
            {...otherProps}
          />
          {placeholder && (
            <label
              for={name}
              className={`${
                isOutlined ? "left-3" : "left-1"
              }  z-10 cursor-text label rounded-lg transition-all bg-gray-900 dark:bg-white-900 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 absolute text-xl text-gray-600 dark:text-white-600 duration-300 transform scale-75 top-2.5 -z-10 origin-[0] peer-focus:text-white-900 dark:peer-focus:text-gray-900 px-2 peer-placeholder-shown:scale-100 peer-focus:scale-75`}
            >
              {placeholder}
              <span className="pl-2 text-primary-700">{required ? "*" : ""}</span>
            </label>
          )}
        </Fragment>
      )}
    </Field>
  );
};

export default Input;
