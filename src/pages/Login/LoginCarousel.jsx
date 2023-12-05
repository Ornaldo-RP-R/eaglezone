import { Picture } from "../../components/staticComponents";
import { Carousel } from "react-responsive-carousel";
import { useLoadingForDyanmicRoute } from "../../components/staticComponents";

const LoginCarousel = () => {
  useLoadingForDyanmicRoute();
  const hasMedias = medias.length > 1;
  return (
    <Carousel
      autoPlay
      emulateTouch
      infiniteLoop
      showThumbs={false}
      showArrows={hasMedias}
      showStatus={false}
      showIndicators={hasMedias}
      interval={2000}
      transitionTime={200}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      {medias.map((mediaProps, i) => {
        return <Picture fixedWidth {...mediaProps} />;
      })}
    </Carousel>
  );
};

const medias = [
  {
    src: "martial45deg.png",
    alt: "Martial M karrige gaming e kthyer 45 deg me jastik per koken",
    sizes: "desktop-big=40%,0.57044980637;tablet=100%,0.57044980637",
    loading: "eager",
  },
  {
    src: "scoutFrontGreen.png",
    alt: "Scout M karrike loje pamje e perparme me jastik per koken dhe mesin",
    sizes: "desktop-big=40%,0.55764075067;tablet=100%,0.55764075067",
  },
  {
    src: "scoutFrontRed.png",
    alt: "Scout M karrike gaming pamje e perparme me jastik per koken dhe kurrizin",
    sizes: "desktop-big=40%,0.55764075067;tablet=100%,0.55764075067",
  },
];

const renderArrow = (handleClick, isRight) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    onClick={handleClick}
    width="32"
    height="32"
    className={`fill-gray-900 dark:fill-white-900 absolute h-full top-0 pb-4 cursor-pointer ml-4 ${
      isRight ? "right-0 rotate-180" : ""
    }`}
    viewBox="0 0 256 256"
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
  </svg>
);

const renderArrowPrev = (handleClick) => renderArrow(handleClick);
const renderArrowNext = (handleClick) => renderArrow(handleClick, true);

export default LoginCarousel;
