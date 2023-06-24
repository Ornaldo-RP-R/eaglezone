import React, { useEffect, useState } from "preact/compat";
import Image from "../../components/Image";
import "./index.scss";

const IntroductionChair = () => {
  const [canLoad45Deg, setCanLoad45Deg] = useState(false);
  const [canStartAnimation, setCanStartAnimation] = useState(false);

  const [showFront, setShowFront] = useState(true);
  const [finalShow, setFinalShow] = useState(false);

  const [isListening, setIsListening] = useState({});
  const showOnAnimationEndMartialPillow = () => setShowFront(false);
  const showOnTransitionEndMartial45Deg = () => setFinalShow(true);
  const nartialPillow = document.querySelector(".martialPillow");
  const martial45deg = document.querySelector(".martial45deg");

  useEffect(() => {
    if (nartialPillow && showFront && canLoad45Deg && !isListening.martialPillow) {
      nartialPillow.addEventListener("animationend", showOnAnimationEndMartialPillow, true);
      setIsListening((l) => ({ ...l, martialPillow: true }));
    }
  }, [showFront, canLoad45Deg, nartialPillow]);

  useEffect(() => {
    if (martial45deg && showFront && canLoad45Deg && !isListening.martial45deg) {
      martial45deg.addEventListener("transitionend", showOnTransitionEndMartial45Deg, true);
      setIsListening((l) => ({ ...l, martial45deg: true }));
    }
  }, [showFront, canLoad45Deg, martial45deg]);

  useEffect(() => {
    return () => {
      nartialPillow?.removeEventListener?.("animationend", showOnAnimationEndMartialPillow, true);
      martial45deg?.removeEventListener?.("animationend", showOnAnimationEndMartialPillow, true);
    };
  }, []);

  const onLoad = () => setCanLoad45Deg(true);
  const onLoadPillow = () => setCanStartAnimation(true);

  return (
    <React.Fragment>
      {!finalShow && (
        <Image
          quality={60}
          className={`introduction-chair absolute ${showFront ? "" : "is-hidden"}`}
          src="martialFrontNoPillow.png"
          onLoad={onLoad}
          loading="eager"
          alt="Martial M karrige gaming portokalli pamja e perparme pa jastik"
          sizes="desktop-big=40%,0.54823933581,tablet=90%,0.54823933581"
        />
      )}
      {canLoad45Deg && (
        <Image
          className={`introduction-chair absolute martial45deg z-10 ${!showFront ? "" : "is-hidden"}`}
          src="martial45deg.png"
          loading="eager"
          allowZoom
          zoomLevel={0.8}
          alt="Martial M karrige gaming portokalli pamja e perparme e rotulluar 45 grade me jastik per koken"
          sizes="desktop-big=30%,0.57044980637,tablet=70%,0.57044980637"
          zoomSizes="desktop-big=1464,0.57044980637"
        />
      )}
      {showFront && canLoad45Deg && !finalShow && (
        <Image
          quality={70}
          hasNotPreview
          className={`martialPillow absolute ${canStartAnimation ? "can-start-animation" : ""}`}
          src="martialPillow.png"
          onLoad={onLoadPillow}
          loading="eager"
          alt="jastiku i kokes per karrigen gaming Martial M"
          sizes="desktop-big=13.6%,1.50240384615"
        />
      )}
    </React.Fragment>
  );
};

export default IntroductionChair;
