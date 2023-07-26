import Input from "../../components/Input/Input";
import { cities, stateNamings } from "./constants";
import { useStateAndUpdateRef, useStatelessOf } from "../../helpers";
import { useEffect } from "preact/hooks";
import { Fragment } from "preact/compat";
import Dropdown from "../../components/Dropdown/Dropdown";
import useWindowSize from "../../hooks/useWindowSize";

export const Emer = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.emer[0]);
  return (
    <Input
      isOutlined
      type="text"
      id="checkout_emer"
      name="emer"
      autoComplete="given-name"
      placeholder="Emër"
      required
      onChange={onChange}
      value={value}
    />
  );
};

export const EmerKompanie = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.emerKompanie[0], { optional: true });
  return (
    <Input
      isOutlined
      type="text"
      id="checkout_emerKompanie"
      name="emerKompanie"
      autoComplete="organization"
      optional
      placeholder="Emër kompanie (Opsionale)"
      onChange={onChange}
      value={value}
    />
  );
};

export const Rruga = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.rruga[0]);
  const { minTablet } = useWindowSize();
  return (
    <Input
      isOutlined
      type="text"
      id="checkout_rruga"
      name="rruga"
      autoComplete="address-line1"
      placeholder={`Adresa ${minTablet ? "" : "(lagje, rruge, numer banese)"}`}
      required
      onChange={onChange}
      value={value}
    />
  );
};

export const Note = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.note[0], { optional: true });
  return (
    <Input
      isOutlined
      type="text"
      id="checkout_note"
      name="note"
      optional
      placeholder="Detaje ekstra (Opsionale)"
      onChange={onChange}
      value={value}
    />
  );
};

export const ZipCode = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.zipCode[0], { validate: validateZipCode });
  return (
    <Input
      isOutlined
      type="text"
      id="checkout_zipCode"
      name="zipCode"
      autoComplete="postal-code"
      placeholder="Kod postar *"
      required
      showError={!validateZipCode(value)}
      error="Kodi postar nuk u gjet ploteso kodin e sakte postar"
      onChange={onChange}
      value={value}
    />
  );
};

function validateZipCode(zipCode) {
  const zipCodeRegex = /^[0-9]{4}$/; // Regex pattern for a 4-digit zip code
  return zipCodeRegex.test(zipCode);
}

export const Qyteti = (props) => {
  const { setTransport } = useStatelessOf(Object.values(stateNamings), props?.statelessRef);
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.qytet[0]);

  const setOption = (option) => {
    setTransport(pricesByCity[option?.label] ?? 500);
    onChange(option);
  };
  return (
    <Dropdown
      required
      placeholder="Zgjidh qytetin/qarkun"
      options={cities}
      {...{ option: value, setOption }}
      withSearch
    />
  );
};

const pricesByCity = { Tirana: 0, Vorë: 0, Kamëz: 0 };

export const Mbiemer = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.mbiemer[0]);
  return (
    <Input
      isOutlined
      type="text"
      id="checkout_mbiemer"
      name="mbiemer"
      autoComplete="family-name"
      placeholder="Mbiemër"
      required
      onChange={onChange}
      value={value}
    />
  );
};

export const Email = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.email[0], { validate: validateEmail });
  return (
    <Input
      isOutlined
      className="mt-2"
      type="text"
      id="checkout_email"
      name="email"
      autoComplete="email"
      placeholder="Adresë email"
      required
      showError={!validateEmail(value)}
      error="Emaili nuk eshte ne formatin e duhur"
      onChange={onChange}
      value={value}
    />
  );
};

function validateEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) return false;
  const parts = email.split("@");
  const domain = parts[1];
  const disposableDomains = ["example.com", "example.net"];
  if (disposableDomains.includes(domain)) return false;
  return true;
}

export const Phone = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, stateNamings.phone[0], {
    validate: validatePhoneNumber,
  });
  const { minTablet } = useWindowSize();
  return (
    <Input
      isOutlined
      className="mt-2"
      type="text"
      id="checkout_phone"
      name="phone"
      autoComplete="tel"
      placeholder={`${minTablet ? "Nr.Tel" : "Numer Telefoni"} (+355675386361)`}
      required
      showError={!validatePhoneNumber(value)}
      error="Formati i plotesuar eshte i gabuar referoju shembullit!"
      onChange={onChange}
      value={value}
    />
  );
};

function validatePhoneNumber(phoneNumber) {
  const albanianRegex = /^((\+|00)355|0)6[789][0-9]{7}$/;
  return albanianRegex.test(phoneNumber);
}

export const Fjalekalim = (props) => {
  const { value: fjalekalimi, onChange: UpdateFjalekalimi } = useFormInput(
    stateNamings,
    props,
    stateNamings.fjalekalim[0]
  );

  return (
    <Input
      isOutlined
      className="mt-2"
      type="password"
      name="password"
      placeholder="Fjalekalim per llogarine"
      required
      onChange={UpdateFjalekalimi}
      value={fjalekalimi}
      autoComplete="off"
    />
  );
};

const useFormInput = (stateNamings, props, name, options) => {
  const { validate, optional, initialState } = options || {};
  const { statelessRef, setDisabled, disabled } = props;
  const [value, setValue] = useStateAndUpdateRef(stateNamings?.[name], initialState ?? "", statelessRef);
  const onChange = (e) => setValue(e?.target?.value === undefined ? e : e?.target?.value);

  useEffect(() => {
    const isValid = optional ? true : value && (!validate || validate?.(value));
    const newDisabled = isValid ? disabled.filter((d) => d !== name) : [...new Set([...disabled, name])];
    if (JSON.stringify(newDisabled) !== JSON.stringify(disabled)) setDisabled(newDisabled);
  }, [value, disabled]);

  return { value, onChange };
};
