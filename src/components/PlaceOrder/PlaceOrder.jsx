import { connect } from "redux-zero/preact";
import "./index.scss";
import { stateNamings } from "../../pages/Checkout/constants";
import { useStatelessOf } from "../../helpers";
import database from "../../constants";
import apiActions from "../../redux/actions/apiActions";
import fireReduxAction from "../../redux/actions/fireReduxAction";
import { INFO, REMOVE_FROM_CART, THROW_ALERT } from "../../redux/types";
import { navigate } from "wouter-preact/use-location";
import useWindowSize from "../../hooks/useWindowSize";

const PlaceOrder = (props) => {
  const { isDisabled, quantities, userToken, total, affiliateData, cart, statelessRef } = props;
  const {
    getTransport,
    getEmer,
    getMbiemer,
    getEmail,
    getPhone,
    getFjalekalim,
    getEmerKompanie,
    getQytet,
    getZipCode,
    getRruga,
    getNote,
  } = useStatelessOf(Object.values(stateNamings), statelessRef);
  const { Code } = affiliateData || {};
  const totalCost = Code ? total * 0.97 : total;

  const createOrderParams = () => ({
    Code,
    TotalShippingCost: quantities * getTransport(),
    Total: totalCost,
    AffiliateCost: total * 0.12,
    Notes: getNote(),
    Address: getRruga(),
    CompanyName: getEmerKompanie(),
    City: getQytet()?.label,
    State: "Albania",
    ZipCode: getZipCode(),
    OrderItems: cart.map((item) => ({
      ProductName: database.products[item?.id]?.title,
      Quantity: item?.quantity,
      Price: database.products[item?.id]?.price,
      ProductId: item?.id,
    })),
  });

  const createOrder = () => {
    const registerParam = {
      Firstname: getEmer(),
      Lastname: getMbiemer(),
      Username: getEmail(),
      Password: getFjalekalim(),
      Email: getEmail(),
      Phone: getPhone(),
    };
    let params = createOrderParams();
    if (!userToken) params.Register = registerParam;
    return apiActions.createOrder(params);
  };

  const handleClick = () => {
    let order = document.querySelector(".order");
    order?.classList?.add?.("animate");

    createOrder()
      .onSuccess(() => {
        cart.forEach((item) => fireReduxAction(REMOVE_FROM_CART, item?.id));
        navigate("/");
        fireReduxAction(THROW_ALERT, { type: INFO, message: "Kontrollo emailin per verifikimin e porosise!" });
      })
      .finally(() => order?.classList?.remove?.("animate"));
  };
  const { minTablet } = useWindowSize();
  return (
    <button
      type="button"
      className={`${isDisabled ? "is-disabled" : ""} order button is-primary w-full ${
        minTablet ? "min-w-full" : "ml-auto"
      }`}
      onClick={isDisabled ? undefined : handleClick}
    >
      <span className="default">Dergo Porosine</span>
      {/* <span className="success">Order Placed</span> */}
      <div className="box" />
      <div className="truck">
        <div className="back" />
        <div className="front">
          <div className="window" />
        </div>
        <div className="light top" />
        <div className="light bottom" />
      </div>
      <div className="lines" />
    </button>
  );
};

const mapStateToProps = ({ user, cart, affiliateData }) => ({ userToken: user?.Token, affiliateData, cart });
export default connect(mapStateToProps)(PlaceOrder);
