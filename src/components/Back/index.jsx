import React from "preact/compat";
import Image from "../Image";
import { useState, useEffect, useRef } from "preact/hooks";
import "./index.scss";
import Arrow from "../../assets/images/arrow";
import useOnScreen from "../../hooks/useOnScreen";

const urls = ["martialBackOrange.png", "scoutBackRed.png", "scoutBackGreen.png"];
const bgUrls = ["martialBackOrangeBg.jpeg", "scoutBackRedBg.jpeg", "scoutBackGreenBg.jpeg"];

const Back = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const containerRef = useRef();
  const { mountedAndShowed } = useOnScreen(containerRef);

  const updateInterval = () => {
    if (intervalId) clearInterval(intervalId);
    const newIntervalId = setInterval(() => changeImage("next", false), 7000);
    setIntervalId(newIntervalId);
    return newIntervalId;
  };

  const changeImage = (direction, force = true) => {
    if (force) clearInterval(intervalId);
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === urls.length - 1 ? 0 : prevIndex + 1;
      } else if (direction === "prev") {
        return prevIndex === 0 ? urls.length - 1 : prevIndex - 1;
      }
    });
    if (force) updateInterval();
  };

  useEffect(() => {
    const newIntervalId = mountedAndShowed && updateInterval();
    return () => newIntervalId && clearInterval(newIntervalId);
  }, [mountedAndShowed]);

  return (
    <div ref={containerRef} className="flex flex-col chair-back">
      <button role="button" aria-label="Shko ne faqen mbrapa" className="prev" onClick={() => changeImage("prev")}>
        <Arrow className="min-h-[50px]" />
      </button>
      <div className="flex relative h-full">
        <Image
          className="h-full w-full flex fade"
          imgClass="w-full object-cover opacity-50"
          key={bgUrls[currentIndex]}
          src={bgUrls[currentIndex]}
          loading="lazy"
          alt="Sfond i nje loje per pjesen mbrapa te karriges"
          sizes="desktop-big=120%,1.77777777778;tablet-big=1500,1.77777777778"
        />
        <Image
          className="h-full w-full flex fade absolute back__chair-content"
          imgClass="w-full object-cover"
          key={urls[currentIndex]}
          src={urls[currentIndex]}
          loading="lazy"
          alt="Pjesa mbrapa e karriges se Eagle Zone Martial M ose Scout M portokalli jeshile ose e kuqe"
          sizes="desktop-big=100%,1.77777777778;tablet-big=1500,1.77777777778"
        />
      </div>
      <button
        role="button"
        aria-label="Shko ne faqen pas , pra faqen tjeter"
        className="next"
        onClick={() => changeImage("next")}
      >
        <Arrow className="min-h-[50px]" />
      </button>
    </div>
  );
};

export default Back;
