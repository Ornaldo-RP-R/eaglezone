import Input from "../../components/Input/Input";
import { stateNamings } from "./constants";
import { useStateAndUpdateRef } from "../../helpers";
import { useEffect } from "preact/hooks";
import { Fragment } from "preact/compat";
import useWindowSize from "../../hooks/useWindowSize";

export const Emer = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, "emer");
  return (
    <Input
      type="text"
      id="login_emer"
      name="emer"
      autoComplete="given-name"
      placeholder="emer"
      required
      onChange={onChange}
      value={value}
      export
    />
  );
};

export const Mbiemer = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, "mbiemer");
  return (
    <Input
      type="text"
      id="login_mbiemer"
      name="mbiemer"
      autoComplete="family-name"
      placeholder="mbiemer"
      required
      onChange={onChange}
      value={value}
    />
  );
};

export const Email = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, "email", validateEmail);
  return (
    <Input
      className="mt-3"
      type="text"
      id="login_email"
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
  const { value, onChange } = useFormInput(stateNamings, props, "phone", validatePhoneNumber);
  const { minTablet } = useWindowSize();
  return (
    <Input
      className="mt-3"
      type="text"
      id="login_phone"
      autoComplete="tel"
      name="phone"
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
  const { value: fjalekalimi, onChange: UpdateFjalekalimi } = useFormInput(stateNamings, props, "fjalekalim");

  return (
    <Fragment>
      <Input
        className="mt-3"
        type="password"
        id="login_fjalekalim"
        name="fjalekalim"
        placeholder="fjalekalimi"
        required
        onChange={UpdateFjalekalimi}
        value={fjalekalimi}
        autoComplete="off"
      />
      {props.confirm && <KonfirmimFjalekalimi {...props} sameAs={fjalekalimi} />}
    </Fragment>
  );
};

export const KonfirmimFjalekalimi = (props) => {
  const { value, onChange } = useFormInput(stateNamings, props, "konfirmimFjalekalimi", (val) => val === props.sameAs);

  return (
    <Input
      className="mt-3"
      type="password"
      id="login_konfirmimFjalekalimi"
      name="konfirmimFjalekalimi"
      placeholder="konfirmo fjalekalimin"
      required
      sameAs={props.sameAs}
      sameAsError="Konfirmimi i fjalekalimit eshte i ndryshem nga fjalekalimi!"
      onChange={onChange}
      value={value}
      autoComplete="off"
    />
  );
};

export const useFormInput = (stateNamings, props, name, validate) => {
  const { statelessRef, setDisabled, disabled } = props;
  const [value, setValue] = useStateAndUpdateRef(stateNamings?.[name], "", statelessRef);
  const onChange = (e) => setValue(e?.target?.value);

  useEffect(() => {
    const isValid = value && (!validate || validate?.(value));
    const newDisabled = isValid ? disabled.filter((d) => d !== name) : [...new Set([...disabled, name])];
    if (JSON.stringify(newDisabled) !== JSON.stringify(disabled)) setDisabled(newDisabled);
  }, [value, disabled]);

  return { value, onChange };
};
