import { useState, useRef, useEffect } from "preact/hooks";
import useOnScreen from "../../hooks/useOnScreen";
import useWindowSize from "../../hooks/useWindowSize";
import "./index.scss";
import { isDeviceTouchable, useStateAndUpdateRef, useStatelessOf } from "../../helpers";
import { OPEN_IMAGE_PREVIEW_MODAL } from "../../redux/types";
import fireReduxAction from "../../redux/actions/fireReduxAction";
import { Fragment } from "preact";
import { windowSsr } from "../../constants";

const Picture = (props) => {
  const {
    src,
    alt,
    quality = 76,
    allowZoom,
    zoomQuality = allowZoom ? 83 : undefined,
    className,
    loading,
    sizes,
    zoomSizes,
    imgClass,
    zoomLevel = 1,
    onLoad,
    fixedWidth,
    disableFadeIn,
  } = props;
  const { statelessRef, setStartLoadingZoom, setZoomPos } = useStatelessOf(stateNamings);
  const hasNotPreview = src?.includes?.(".svg") ? true : props.hasNotPreview;
  const [showFullImage, setShowFullImage] = useState(!!hasNotPreview);
  const [zoomLoaded, setZoomLoaded] = useState(false);
  const [zoom, setZoom] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const { device, width: windowWidth } = useWindowSize();
  const shouldCover = (imgClass || "").includes("object-cover");
  const { mountedAndShowed } = useOnScreen(imgRef);

  const size = getSize(sizes, shouldCover ? Infinity : windowWidth, device);
  const zoomSize = allowZoom && getSize(zoomSizes || sizes, windowWidth * 2, device, true);
  const { width, imgWidth, imgHeight, aspectRatio } = size;
  const {
    width: zoomWidth,
    imgWidth: zoomImgWidth,
    imgHeight: zoomImgHeight,
    aspectRatio: zoomAspectRatio,
  } = zoomSize || {};

  const onMouseMove =
    allowZoom &&
    ((event) => {
      const containerRect = containerRef?.current?.getBoundingClientRect?.();
      const { left, top, width, height } = containerRect || {};
      const mouseX = event.clientX - left;
      const mouseY = event.clientY - top;
      const newZoomPos = {
        left: `${Math.max(Math.min(mouseX - 100, width - 180), 20)}px`,
        top: `${Math.min(Math.max(mouseY - 100, -20), height - 180)}px`,
        posLeft: `${((Math.floor(mouseX) + 0.00001) / width) * 100}%`,
        posTop: `${((Math.floor(mouseY) + 0.00001) / height) * 100}%`,
      };

      if (!zoom) setZoom(true);
      setZoomPos(newZoomPos);
    });

  const onMouseLeave = allowZoom && (() => setZoom(false));

  const zoomSrc = allowZoom && buildSrc(src, zoomWidth, zoomQuality || quality);
  const imgSrc =
    zoomLoaded && zoomSrc ? zoomSrc : buildSrc(getSrc(src, !showFullImage), width, quality, !showFullImage);

  const isTouchable = isDeviceTouchable();

  const imgProps = {
    loading: loading || "lazy",
    alt,
    className: `w-full h-full pointer-events-none fade-in ${
      disableFadeIn
        ? ""
        : `${showFullImage && mountedAndShowed ? "opacity-100" : "opacity-0"} transition-opacity duration-500`
    } ${imgClass || ""}`,
    style: { ...(showFullImage ? null : blurStyle), ...(props.style || {}), aspectRatio },
  };

  const handleClick = () => {
    if (isTouchable && zoom && allowZoom && zoomLoaded)
      fireReduxAction(OPEN_IMAGE_PREVIEW_MODAL, {
        ...imgProps,
        width: zoomImgWidth,
        height: zoomImgHeight,
        src: zoomSrc,
        aspectRatio: zoomAspectRatio,
      });
  };
  const hasWidth =
    fixedWidth ||
    ((className || "").includes("w-") && !(className || "").includes("max-w-")) ||
    ((className || "").includes("w-") && (className || "").includes("max-w-"));
  const newAspectRatio = `aspect-ratio:${zoomLoaded ? zoomAspectRatio : aspectRatio}${
    hasWidth ? "" : `;width:${imgWidth}px`
  }`;

  useEffect(() => {
    if (containerRef.current) containerRef.current.style = newAspectRatio;
  }, [newAspectRatio]);

  useEffect(() => {
    if (mountedAndShowed && !showFullImage) {
      const { style } = imgRef.current || {};
      if (style?.filter) style.filter = "none";
      setShowFullImage(true);
    }
  }, [mountedAndShowed]);

  return (
    <Fragment>
      <ZoomLoadManager {...{ statelessRef, allowZoom, zoomSrc, zoomLoaded, setZoomLoaded }} />
      <div
        ref={containerRef}
        {...(allowZoom ? { onMouseMove, onMouseLeave } : {})}
        onClick={handleClick}
        className={`fast-image m-auto ${className || ""} inline-block ${
          allowZoom ? (!zoomLoaded ? "cursor-wait" : "cursor-zoom-in") : ""
        }`}
      >
        <img
          {...imgProps}
          src={imgSrc}
          ref={imgRef}
          width={imgWidth}
          onLoad={() => {
            if (onLoad) onLoad();
            if (allowZoom) setStartLoadingZoom(true);
          }}
          height={imgHeight}
        />

        {zoom && allowZoom && !isTouchable && zoomLoaded && (
          <Zoom
            backgroundSize={`${zoomImgWidth * zoomLevel}px ${zoomImgHeight * zoomLevel}px`}
            zoomSrc={zoomSrc}
            statelessRef={statelessRef}
          />
        )}
      </div>
    </Fragment>
  );
};

const Zoom = (props) => {
  const { zoomSrc, backgroundSize, statelessRef } = props;
  const [zoomPos] = useStateAndUpdateRef(stateNamings.zoomPos, { left: 0, top: 0 }, statelessRef);
  const { left, top, posLeft, posTop } = zoomPos || {};
  const backgroundPosition = `${posLeft} ${posTop}`;
  const backgroundImage = `url(${zoomSrc})`;
  return (
    <div
      className="w-[200px] h-[200px] bg-no-repeat	rounded-[50%] pointer-events-none z-10 border border-gray-200 dark:border-white-200"
      style={{ position: "absolute", left, top, backgroundPosition, backgroundImage, backgroundSize }}
    />
  );
};

const stateNamings = {
  startLoadingZoom: ["startLoadingZoom", "setStartLoadingZoom"],
  zoomPos: ["zoomPos", "setZoomPos"],
};

const ZoomLoadManager = (props) => {
  const { allowZoom, zoomSrc, zoomLoaded, setZoomLoaded, statelessRef } = props;
  const [startLoadingZoom] = useStateAndUpdateRef(stateNamings.startLoadingZoom, false, statelessRef);

  const zoomLoading = useRef(false);

  const shouldChangeToZoom = startLoadingZoom && allowZoom && zoomSrc && !zoomLoaded && !zoomLoading?.current;
  useEffect(() => {
    if (shouldChangeToZoom) {
      const img = new Image();
      img.onload = () => setZoomLoaded(true);
      img.src = zoomSrc;
    }
  }, [startLoadingZoom, allowZoom, zoomLoaded, zoomLoading]);
  return null;
};

const getSrc = (src, shouldBlurr) => {
  const fileExtension = (src || "").split(".").pop();
  const filenameWithoutExtension = src.substring(0, src.length - fileExtension.length - 1);
  return `${filenameWithoutExtension}${shouldBlurr ? "Blurry" : ""}.${fileExtension}`;
};

const blurStyle = { filter: "blur(20px)" };

const isMac = windowSsr?.navigator?.vendor?.includes?.("Apple");
const buildSrc = (src, w, q, isBlur) => {
  const base = `https://api.menaxhimbiznesi.com/api/File/Retrieve?file=${src}`;
  const isSvg = base.includes(".svg");
  return isSvg
    ? base
    : isBlur
    ? `${base}&quality=60`
    : `${base}&width=${parseInt(w * (isMac ? 1.4 : 1.1))}${q ? `&quality=${q}` : ""}`;
};

let sizeCache = {};

const getSize = (sizes, windowWidth, device, zoom) => {
  const key = `${sizes}${windowWidth}${device}${zoom}`;
  if (sizeCache[key]) return sizeCache[key];
  let newSizes = parseSize(sizes, windowWidth);
  let currentSize = (zoom ? newSizes["desktop-big"] : newSizes[device]) || Object.values(newSizes)[0];
  const { width, aspectRatio } = currentSize || {};
  currentSize.width = Math.min(width, windowWidth);
  currentSize.imgWidth = Math.min(width, windowWidth);
  currentSize.imgHeight = currentSize.imgWidth / aspectRatio;
  currentSize.height = currentSize.width / aspectRatio;
  currentSize.aspectRatio = currentSize.width / currentSize.height;
  sizeCache[key] = currentSize;
  return currentSize;
};

const devices = ["desktop-big", "desktop-mid", "desktop", "tablet-big", "tablet", "mobile"];
let parseSizeCache = {};
function parseSize(sizeString, windowWidth) {
  const key = `${sizeString}${windowWidth}`;
  if (parseSizeCache[key]) return parseSizeCache[key];

  const sizes = {};

  for (const part of sizeString.split(";")) {
    const [device, dimensions] = part.split("=");
    const [width, aspectRatio] = dimensions.split(",");
    sizes[device] = {
      width: correctWidth(width, windowWidth) ?? sizes[device]?.width,
      aspectRatio: !isNaN(parseFloat(aspectRatio)) ? parseFloat(aspectRatio) : sizes[device]?.aspectRatio,
    };
  }

  for (const device of devices) {
    if (!sizes[device]) sizes[device] = {};

    let { width, aspectRatio } = sizes[device] ?? {};

    if (!width || !aspectRatio) {
      for (let i = devices.indexOf(device) - 1; i >= 0; i--) {
        const nearestDevice = devices[i];
        sizes[device].width ??= sizes[nearestDevice]?.width;
        sizes[device].aspectRatio ??= sizes[nearestDevice]?.aspectRatio;
        if (sizes[device].width && sizes[device].aspectRatio) break;
      }
    }
  }
  parseSizeCache[key] = sizes;
  return sizes;
}

const correctWidth = (width, windowWidth) => {
  if (width && width?.includes?.("%"))
    return windowWidth === Infinity
      ? window.innerWidth * (parseFloat(width) / 100)
      : (parseFloat(width) / 100) * windowWidth;
  return width;
};

export default Picture;
