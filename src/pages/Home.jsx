import React from "react";
import Introduction from "../components/Introduction";
import Adjustable from "../components/Adjustable";
import Quality from "../components/Quality";
import Back from "../components/Back";
import Footer from "../components/Footer";
import About from "../components/About";
import { useEffect } from "preact/hooks";

export function Home(props) {
  const { setLoading } = props;
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="app h-full z-0 relative">
      <Introduction />
      <Adjustable />
      <Quality />
      <Back />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
