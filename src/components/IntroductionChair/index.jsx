import { useEffect, useState, useRef } from "preact/hooks";
import { Picture } from "../staticComponents";
import "./index.scss";

const IntroductionChair = () => {
  const [canLoad45Deg, setCanLoad45Deg] = useState(false);
  const [showFront, setShowFront] = useState(true);
  const [finalShow, setFinalShow] = useState(false);
  const [canStartAnimation, setCanStartAnimation] = useState(false);

  const animationEndListener = useRef(false);
  const transitionEndListener = useRef(false);

  const showOnAnimationEndMartialPillow = () => setShowFront(false);
  const showOnTransitionEndMartial45Deg = () => setFinalShow(true);
  const containerRef = useRef(null);

  const getSelectors = () => {
    const nartialPillow = containerRef.current?.querySelector?.(".martialPillow");
    const martial45deg = containerRef.current?.querySelector?.(".martial45deg");
    return { nartialPillow, martial45deg };
  };

  const unmount = () => {
    const { nartialPillow, martial45deg } = getSelectors();
    nartialPillow?.removeEventListener?.("animationend", showOnAnimationEndMartialPillow, true);
    martial45deg?.removeEventListener?.("animationend", showOnAnimationEndMartialPillow, true);
  };

  useEffect(() => {
    const { nartialPillow, martial45deg } = getSelectors();
    if (nartialPillow && showFront && canLoad45Deg && !animationEndListener?.current) {
      nartialPillow.addEventListener("animationend", showOnAnimationEndMartialPillow, true);
      animationEndListener.current = true;
    }
    if (martial45deg && showFront && canLoad45Deg && !transitionEndListener?.current) {
      martial45deg.addEventListener("transitionend", showOnTransitionEndMartial45Deg, true);
      transitionEndListener.current = true;
    }
    return unmount;
  }, [containerRef.current, showFront, canLoad45Deg]);

  useEffect(() => unmount, []);

  const onLoad = () => setCanLoad45Deg(true);
  const onLoadPillow = () => setCanStartAnimation(true);

  return (
    <div ref={containerRef}>
      {!finalShow && (
        <Picture
          quality={60}
          fixedWidth
          className={`introduction-chair absolute ${showFront ? "" : "is-hidden"}`}
          src="martialFrontNoPillow.png"
          onLoad={onLoad}
          loading="eager"
          alt="Martial M karrige gaming portokalli pamja e perparme pa jastik"
          sizes="desktop-big=40%,0.54823933581,tablet=90%,0.54823933581"
        />
      )}
      {canLoad45Deg && (
        <Picture
          fixedWidth
          className={`introduction-chair absolute martial45deg z-10 ${!showFront ? "" : "is-hidden"}`}
          src="martial45deg.png"
          disableFadeIn
          loading="eager"
          allowZoom
          zoomLevel={0.8}
          alt="Martial M karrige gaming portokalli pamja e perparme e rotulluar 45 grade me jastik per koken"
          sizes="desktop-big=30%,0.57044980637,tablet=70%,0.57044980637"
          zoomSizes="desktop-big=1464,0.57044980637"
        />
      )}
      {showFront && canLoad45Deg && !finalShow && (
        <Picture
          quality={70}
          hasNotPreview
          fixedWidth
          disableFadeIn
          className={`martialPillow absolute ${canStartAnimation ? "can-start-animation" : ""}`}
          src="martialPillow.png"
          onLoad={onLoadPillow}
          loading="eager"
          alt="jastiku i kokes per karrigen gaming Martial M"
          sizes="desktop-big=13.6%,1.50240384615"
        />
      )}
    </div>
  );
};

export default IntroductionChair;
