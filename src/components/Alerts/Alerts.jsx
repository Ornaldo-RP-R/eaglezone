import Alert from "./Alert";
import { connect } from "redux-zero/preact";
import "./alerts.scss";

const Alerts = (props) => {
  const { alerts } = props;

  return (
    <div className="alerts-container w-full z-50">
      <div className="relative">
        <div className="alerts alert-display-top-right absolute">
          {(alerts || []).map((alertData) => {
            const { message, type, id } = alertData || {};
            return <Alert {...{ message, type, id }} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ alerts }) => ({ alerts });
export default connect(mapStateToProps)(Alerts);
