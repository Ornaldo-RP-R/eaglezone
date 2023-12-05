import { Fjalekalim, Email } from "./Inputs";
import { useState } from "preact/hooks";
import { useStatelessOf } from "../../helpers";
import { stateNamings } from "./constants";
import apiActions from "../../redux/actions/apiActions";
import { navigate } from "wouter-preact/use-location";
import { connect } from "redux-zero/preact";
import { Submit } from "../../components/staticComponents";

const LoginForm = (props) => {
  const { userIsLoading } = props;
  const { statelessRef, getEmail, getFjalekalim } = useStatelessOf([stateNamings.email, stateNamings.fjalekalim]);
  const [disabled, setDisabled] = useState(["email", "fjalekalim"]);
  const isDisabled = disabled?.length >= 1;

  const onSubmit = () => {
    const params = { Username: getEmail(), Password: getFjalekalim() };
    apiActions.login(params).onSuccess(() => navigate("/"));
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
      <Email statelessRef={statelessRef} disabled={disabled} setDisabled={setDisabled} />
      <Fjalekalim statelessRef={statelessRef} disabled={disabled} setDisabled={setDisabled} />
      <Submit
        isLoading={userIsLoading}
        onSubmit={onSubmit}
        title="Hyr"
        isDisabled={isDisabled}
        href="/regjistrohu"
        description="Nuk keni llogari ?"
        linkTitle="Regjistrohu"
      />
    </div>
  );
};

const mapToProps = ({ userIsLoading }) => ({ userIsLoading });
export default connect(mapToProps)(LoginForm);
