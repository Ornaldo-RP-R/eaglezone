import { useState } from "preact/hooks";
import Section from "../../components/Section";
import { priceIn, useStateAndUpdateRef, useStatelessOf } from "../../helpers";
import useLoadingForDyanmicRoute from "../../hooks/useLoadingForDyanmicRoute";
import { Email, Emer, EmerKompanie, Fjalekalim, Mbiemer, Note, Phone, Qyteti, Rruga, ZipCode } from "./Inputs";
import { stateNamings } from "./constants";
import { Fragment } from "preact";
import { connect } from "redux-zero/preact";
import database from "../../constants";
import Picture from "../../components/Picture/Picture";
import PlaceOrder from "../../components/PlaceOrder/PlaceOrder";
import fireReduxAction from "../../redux/actions/fireReduxAction";
import { REMOVE_FROM_CART, UPDATE_FROM_CART } from "../../redux/types";
import useWindowSize from "../../hooks/useWindowSize";

const Checkout = (props) => {
  const { userToken, cart, affiliateData } = props;
  useLoadingForDyanmicRoute();
  const { statelessRef } = useStatelessOf(Object.values(stateNamings));
  const fieldsToFilter = userToken ? ["emer", "mbiemer", "email", "phone", "fjalekalim"] : [];
  const [disabled, setDisabled] = useState(
    Object.keys(stateNamings || {}).filter((key) => !fieldsToFilter.concat(["transport"]).includes(key))
  );
  const isDisabled = disabled?.length >= 1;

  const inputProps = { statelessRef, disabled, setDisabled };
  const quantities = (cart || []).reduce((acc, item) => acc + item?.quantity, 0);
  const total = (cart || []).reduce(
    (acc, item) => (database.products?.[item?.id]?.price || 0) * item?.quantity + acc,
    0
  );

  const cartContent = (
    <div className="flex flex-col w-full gap-4 p-4 border focus:border-white-900 dark:focus:border-gray-900 peer border-gray-600 dark:border-white-600 rounded-lg">
      <div className="w-full items-center flex flex-col gap-6">
        {(cart || []).map((item) => {
          const maxQuantity = 4;
          const { id, quantity } = item || {};
          const product = database.products?.[id] || {};
          const image = product.gallery?.[0] || {};
          const maximum = Math.min(maxQuantity, maxQuantity - quantities + (quantity || 1));
          const canAdd = quantity + 1 <= maximum;
          const canReduce = quantity - 1 >= 1;
          const onUpdate = (newQuantity) => {
            const quantity = Math.max(Math.min(newQuantity, maxQuantity), 1);
            fireReduxAction(UPDATE_FROM_CART, { ...item, quantity });
          };

          return (
            <div
              key={id}
              className="flex px-4 pb-2 gap-2 w-full justify-between items-center border-b focus:border-white-900 dark:focus:border-gray-900 peer border-gray-600 dark:border-white-600"
            >
              <div className="flex gap-4 items-center">
                <Picture
                  className="max-h-[70px] max-w-[35px]"
                  sizes={`desktop-big=33,${image?.aspectRatio}`}
                  {...image}
                />
                <p className="font-small text-white-700 dark:text-gray-700">{product?.title}</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  className={`mr-1 fill-white-700 dark:fill-gray-700 ${
                    canReduce ? "cursor-pointer" : "cursor-not-allowed opacity-50"
                  }`}
                  viewBox="0 0 256 256"
                  onClick={() => canReduce && onUpdate(quantity - 1)}
                >
                  <path d="M176,128a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,128Zm56,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>

                <input
                  className="bg-transparent border-b focus:border-white-900 dark:focus:border-gray-900 peer border-gray-600 dark:border-white-60  w-[20px] text-center"
                  min={1}
                  max={maximum}
                  type="number"
                  value={quantity || 1}
                  onChange={(e) => onUpdate(e?.target?.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  className={`mx-1 fill-white-700 dark:fill-gray-700 ${
                    canAdd ? "cursor-pointer" : "cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => canAdd && onUpdate(quantity + 1)}
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                </svg>
                <label
                  className="relative ml-2 cursor-pointer text-xs hover:text-primary-700 select-none"
                  onClick={() => fireReduxAction(REMOVE_FROM_CART, id)}
                >
                  &#x2715;
                </label>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <span className="text-secondary-700 flex items-center p-2 px-4 bg-white-200 dark:bg-gray-100 w-full rounded-lg">
          Per sasi me te medha na kontaktoni
        </span>
      </div>
      <Cost affiliateData={affiliateData} statelessRef={statelessRef} total={total} quantity={quantities} />
    </div>
  );
  const { minTablet } = useWindowSize();
  return (
    <Section className="h-max flex" overflowClass="overflow-visible">
      <div className="flex lg:flex-row flex-col gap-6 w-full">
        {minTablet && cartContent}
        <div className="flex flex-col gap-2 lg:w-[55%] w-full">
          {!userToken && (
            <Fragment>
              <div className="flex gap-4">
                <Emer {...inputProps} />
                <Mbiemer {...inputProps} />
              </div>
              <Email {...inputProps} />
              <Fjalekalim confirm {...inputProps} />
              <Phone {...inputProps} />
            </Fragment>
          )}
          <EmerKompanie {...inputProps} />
          <Qyteti {...inputProps} />
          <Rruga {...inputProps} />
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="lg:w-[300px]">
              <ZipCode {...inputProps} />
            </div>
            <Note {...inputProps} />
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:w-[45%] w-full lg:sticky top-4 self-start">
          {!minTablet && cartContent}
          <div>
            <span className="text-secondary-700 flex gap-2 items-center p-2 bg-secondary-50 w-full rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                className="fill-secondary-700"
                height="42"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
              </svg>
              <span className="text-sm">
                Faleminderit për besimin tuaj! Do ju kontaktojmë për verifikim para dërgesës nepermjet email ose
                telefonit.
              </span>
            </span>
          </div>
          <PlaceOrder
            total={total}
            quantities={quantities}
            title="Krijo porosine"
            isDisabled={isDisabled}
            statelessRef={statelessRef}
          />
        </div>
      </div>
    </Section>
  );
};

const Cost = (props) => {
  const { statelessRef, total, quantity, affiliateData } = props;
  const [transport] = useStateAndUpdateRef(stateNamings.transport, 0, statelessRef);
  const transportCost = quantity * transport;
  const { Code, AffiliateName } = affiliateData || {};
  const totalCost = Code ? total * 0.97 : total;
  return (
    <div className="flex flex-col w-full gap-1">
      <CostRow label="Transporti" cost={transportCost ? priceIn(transportCost, "lek") : "Falas"} />
      <CostRow label="NenTotali" cost={priceIn(total, "lek")} />
      <CostRow
        costClassName="text-tertiary-700"
        label={`Kupon Nga ${AffiliateName}`}
        cost={priceIn(-1 * (total * 0.03), "lek")}
      />
      <CostRow label="Totali" cost={priceIn(transportCost + totalCost, "lek")} />
    </div>
  );
};

const CostRow = (props) => {
  const { label, cost, costClassName } = props;
  return (
    <div className="items-center px-4 pb-2 flex justify-between border-b last:border-none last:pb-0 border-white-500 dark:border-gray-500">
      <p className="font-small text-white-700 dark:text-gray-700">{label}</p>
      <p className={`font-small ${costClassName || "text-white-700 dark:text-gray-700"}`}>{cost}</p>
    </div>
  );
};

const mapStateToProps = ({ cart, user, affiliateData }) => ({
  cart,
  userToken: user?.Token,
  user,
  affiliateData,
});
export default connect(mapStateToProps)(Checkout);
