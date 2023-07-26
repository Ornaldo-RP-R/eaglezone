import { useState, useEffect } from "preact/hooks";
import { lazy, Suspense, Fragment } from "preact/compat";
import ImagePreviewModal from "./components/ImagePreview";
import { Route, Switch } from "wouter";
import "./assets/theme/app.scss";
import Alerts from "./components/Alerts/Alerts";
import { connect } from "redux-zero/preact";
import fireReduxAction from "./redux/actions/fireReduxAction";
import { SET_APP_LOADING } from "./redux/types";
import StickyCard from "./components/StickyCard/StickyCard";
import apiActions from "./redux/actions/apiActions";

const Home = lazy(() => import("./pages/Home"));
const ProductView = lazy(() => import("./pages/ProductView"));
const Shop = lazy(() => import("./pages/Shop"));
const Profili = lazy(() => import("./pages/Profili"));
const Login = lazy(() => import("./pages/Login/index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

const mapStateToProps = ({ user, cart }) => ({
  userToken: user?.Token,
  hasInCart: !!cart?.length,
});
export const App = connect(mapStateToProps)((props) => {
  const { userToken, hasInCart } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (code) {
      apiActions.checkAffiliateCode(code);
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      searchParams.delete("code");
    }
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Fragment>
        <StickyCard />
        <AppLoader />
        <Alerts />
        <ImagePreviewModal />
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route exact path="/" component={Home} />
            {!userToken && (
              <Fragment>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup">
                  {() => <Login shouldRegister />}
                </Route>
                <Route exact path="/signup/affiliateSeller">
                  {() => <Login shouldRegister isAffiliateSeller />}
                </Route>
              </Fragment>
            )}
            <Route exact path="/profili" component={Profili} />
            <Route exact path="/shop/:id/:id" component={ProductView} />
            <Route exact path="/shop/:id" component={Shop} />
            {hasInCart && <Route exact path="/checkout" component={Checkout} />}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Fragment>
    )
  );
});

const loaderMapToProps = ({ appLoading }) => ({ appLoading });
const AppLoader = connect(loaderMapToProps)((props) => {
  const { appLoading } = props;
  const updateFixedSpinner = () => {
    const spinnerElement = document.querySelector(".fixed-spinner");
    if (appLoading !== undefined) spinnerElement.classList?.[appLoading ? "remove" : "add"]("hidden");
  };

  useEffect(() => {
    const setRootVh = () => {
      const isSafari =
        !!navigator.userAgentData && !!navigator.userAgentData.brands.find((brand) => brand.brand === "Safari");
      let vh = window.innerHeight * 0.01;
      if (isSafari) {
        const safariSearchHeight = window.visualViewport.height - window.innerHeight;
        vh = (window.innerHeight - safariSearchHeight) * 0.01;
      }
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setRootVh();
    window.addEventListener("resize", setRootVh, true);
    updateFixedSpinner();
    return () => {
      updateFixedSpinner();
      window.removeEventListener("resize", setRootVh, true);
    };
  }, []);

  useEffect(() => {
    updateFixedSpinner();
  }, [appLoading]);
  return null;
});

const Fallback = () => {
  useEffect(() => {
    fireReduxAction(SET_APP_LOADING, true);
    return () => fireReduxAction(SET_APP_LOADING, false);
  }, []);
  return null;
};

const AppWrapper = () => <App />;
export default AppWrapper;
