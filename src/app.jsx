import React, { lazy, Suspense } from "preact/compat";
import { useState, useRef } from "preact/hooks";
import { useEffect } from "preact/hooks";
import ImagePreviewModal from "./components/ImagePreview";
import ModalContext from "./components/ImagePreview/modalContext";
import { Route, Switch } from "wouter";
import "./assets/theme/app.scss";

const Home = lazy(() => import("./pages/Home"));
const ProductView = lazy(() => import("./pages/ProductView"));
const Shop = lazy(() => import("./pages/Shop"));

export function App() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState();

  const updateFixedSpinner = () => {
    const spinnerElement = document.querySelector(".fixed-spinner");
    if (loading !== undefined) spinnerElement.classList?.[loading ? "remove" : "add"]("hidden");
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
    setMounted(true);
    window.addEventListener("resize", setRootVh, true);
    updateFixedSpinner();
    return () => {
      updateFixedSpinner();
      window.removeEventListener("resize", setRootVh, true);
    };
  }, []);

  useEffect(() => {
    updateFixedSpinner();
  }, [loading]);

  const modalRef = useRef(null);

  const openModal = (props) => {
    if (modalRef.current) {
      modalRef.current.openModal(props);
    }
  };

  return (
    mounted && (
      <ModalContext.Provider value={{ openModal }}>
        <ImagePreviewModal ref={modalRef} />
        <Suspense onre fallback={<Fallback setLoading={setLoading} />}>
          <Switch>
            <Route exact path="/">
              {() => <Home setLoading={setLoading} />}
            </Route>
            <Route exact path="/shop/:id/:id">
              {() => <ProductView setLoading={setLoading} />}
            </Route>
            <Route exact path="/shop/:id">
              {() => <Shop setLoading={setLoading} />}
            </Route>
          </Switch>
        </Suspense>
      </ModalContext.Provider>
    )
  );
}
const Fallback = (props) => {
  const { setLoading } = props;
  useEffect(() => () => setLoading(false), []);
  return null;
};

export default App;
