import { useEffect, useRef } from "preact/hooks";
import { useStateAndUpdateRef, useStatelessOf } from "../../helpers";
import "./index.scss";
import { Fragment } from "preact";
import { Field } from "../staticComponents";

const Dropdown = (props) => {
  const {
    placement,
    option,
    setOption,
    options,
    withSearch,
    placeholder,
    button,
    children,
    className,
    onBlur,
    sameAs,
    error,
    showError,
    sameAsError,
  } = props;
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const { statelessRef, setSearch } = useStatelessOf(stateNamings);

  const getClassList = () => dropdownRef?.current?.classList;
  const onClick = () => getClassList().toggle("hidden");

  const onSelect = (option) => {
    setOption(option);
    getClassList().add("hidden");
  };
  const dropdownId = `dropdown${placement}`;
  const buttonId = `dropdown${placement}Button`;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if ([dropdownRef, buttonRef].every((ref) => !ref?.current?.contains?.(event?.target))) {
        getClassList().add("hidden");
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const hasCustomButton = typeof button === "function" || !!button;
  return (
    <Field
      hideErrors={button !== undefined}
      {...{ className: `${className || ""} z-20`, onBlur, value: option?.label, sameAs, error, showError, sameAsError }}
    >
      {(errLength, handleBlur) => (
        <div className="w-full relative h-max">
          <button
            id={buttonId}
            ref={buttonRef}
            data-dropdown-toggle={dropdownId}
            data-dropdown-placement={placement}
            className={`${hasCustomButton ? "" : "field"} is--dropdown w-full ${
              option?.label ? "has--label" : "has--placeholder"
            }`}
            type="button"
            onBlur={handleBlur}
            onClick={onClick}
          >
            {typeof button === "function"
              ? button(option, placeholder)
              : button || (
                  <Fragment>
                    <p className={option?.label ? "is--label" : "is--placeholder"}>{option?.label || placeholder}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m4 6 4 4 4-4"
                      />
                    </svg>
                  </Fragment>
                )}
          </button>

          <div
            id={dropdownId}
            ref={dropdownRef}
            className={`z-20 hidden divide-y divide-white-600 dark:divide-white-600 absolute rounded-lg bg-gray-900 dark:bg-white-900 field-menu w-full`}
          >
            {withSearch && (
              <div className="p-2">
                <label htmlFor="input-group-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="input-group-search"
                    className="field w-full"
                    placeholder="Kerko"
                    onChange={(e) => setSearch(e?.target?.value)}
                  />
                </div>
              </div>
            )}

            <ul className="max-h-48 overflow-y-auto" aria-labelledby={buttonId}>
              {children || <Options options={options} statelessRef={statelessRef} onSelect={onSelect} />}
            </ul>
          </div>
        </div>
      )}
    </Field>
  );
};

let cache = {};
const stateNamings = { search: ["search", "setSearch"] };
const Options = (props) => {
  const { options, statelessRef, onSelect } = props;
  const [search] = useStateAndUpdateRef(stateNamings.search, "", statelessRef);

  const filteredOptions = cache[search] || options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()));
  cache[search] = filteredOptions;

  useEffect(() => {
    return () => {
      cache = {};
    };
  }, []);

  return filteredOptions?.length ? (
    filteredOptions.map((option) => (
      <li key={option.id} className="inline-flex w-full">
        <button type="button" onClick={() => onSelect(option)} className="inline-flex w-full p-2 rounded-md">
          {option.label}
        </button>
      </li>
    ))
  ) : (
    <p className="p-4 text-center">Asgje nuk u gjet</p>
  );
};

Dropdown.defaultProps = { placement: "bottom" };

export default Dropdown;
