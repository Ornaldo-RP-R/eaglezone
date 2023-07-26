import { Emer, Mbiemer, Fjalekalim, Phone, Email } from "./Inputs";
import { stateNamings } from "./constants";
import { useState } from "preact/hooks";
import { useStatelessOf } from "../../helpers";
import apiActions from "../../redux/actions/apiActions";
import database from "../../constants";
import { navigate } from "wouter/use-location";
import { connect } from "redux-zero/preact";
import Submit from "../../components/Submit/Submit";

const SignUpForm = (props) => {
  const { signUpIsLoading, isAffiliateSeller } = props;
  const { statelessRef, getEmer, getPhone, getMbiemer, getEmail, getFjalekalim, getKonfirmimFjalekalimi } =
    useStatelessOf(Object.values(stateNamings));
  const [disabled, setDisabled] = useState(Object.keys(stateNamings || {}));
  const isDisabled = disabled?.length >= 1;

  const onSubmit = () => {
    const params = {
      Firstname: getEmer(),
      Lastname: getMbiemer(),
      Username: getEmail(),
      Password: getFjalekalim(),
      ConfirmPassword: getKonfirmimFjalekalimi(),
      Email: getEmail(),
      Phone: getPhone(),
      RoleId: isAffiliateSeller ? database.roles.AffiliateSeller : database.roles.User,
    };
    apiActions.register(params).onSuccess(() => navigate("/login"));
  };

  const handleKeyDown = (e) => {
    if (e?.key === "Enter" && !isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      onSubmit(e);
    }
  };
  return (
    <div className="flex flex-col px-4 justify-center my-auto" onKeyDown={handleKeyDown}>
      <div className="flex w-100 gap-8">
        <Emer statelessRef={statelessRef} disabled={disabled} setDisabled={setDisabled} />
        <Mbiemer statelessRef={statelessRef} disabled={disabled} setDisabled={setDisabled} />
      </div>
      <Email statelessRef={statelessRef} disabled={disabled} setDisabled={setDisabled} />
      <Fjalekalim confirm statelessRef={statelessRef} disabled={disabled} setDisabled={setDisabled} />
      <Phone statelessRef={statelessRef} disabled={disabled} setDisabled={setDisabled} />
      <Submit
        isLoading={signUpIsLoading}
        onSubmit={onSubmit}
        title="Regjistrohu"
        isDisabled={isDisabled}
        href="/login"
        description="Keni Llogari ? "
        linkTitle="Hyr"
      />
    </div>
  );
};

const mapToProps = ({ signUpIsLoading }) => ({ signUpIsLoading });
export default connect(mapToProps)(SignUpForm);
