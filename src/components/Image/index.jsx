import { useState, useRef, useEffect, useContext } from "preact/hooks";
import React, { memo } from "preact/compat";
import useOnScreen from "../../hooks/useOnScreen";
import useWindowSize from "../../hooks/useWindowSize";
import ModalContext from "../../components/ImagePreview/modalContext";
import "./index.scss";
import { isDeviceTouchable } from "../../helpers";

let cdnCache = JSON.parse(localStorage.getItem("EagleZoneImageCdnCacheImgKitAl")) || {};

let accounts = JSON.parse(localStorage.getItem("EagleZoneImageAccountsCacheImgKitAl")) || {
  eaglezone: 0,
  eagleZoneAl: 0,
};

let getCdn = (src, w, q, isBlur) => {
  let points = isBlur && !w ? 300 : w * (isBlur ? 20 : q);
  if ((src || "").includes("svg")) points = 100;
  if ((src || "").includes("png")) points = points * 10;
  let notUsedAcc =
    cdnCache[src] ||
    Object.entries(accounts).reduce((a, [k, v]) => (v < accounts[a] ? k : a), Object.keys(accounts)[0]);
  accounts[notUsedAcc] = accounts[notUsedAcc] + points / 100;
  let cdn = `https://ik.imagekit.io/${notUsedAcc}`;
  cdnCache[src] = notUsedAcc;
  localStorage.setItem("EagleZoneImageCdnCacheImgKit", JSON.stringify(cdnCache));
  localStorage.setItem("EagleZoneImageAccountsCacheImgKit", JSON.stringify(accounts));
  return cdn;
};

const ImageComponent = (props) => {
  const {
    src,
    alt,
    quality = 76,
    allowZoom,
    zoomQuality = allowZoom ? 85 : undefined,
    hasNotPreview,
    className,
    loading,
    sizes,
    zoomSizes,
    imgClass,
    zoomLevel = 1,
    onLoad,
  } = props;
  const [show, setShow] = useState(!!hasNotPreview);
  const [startLoadingZoom, setStartLoadingZoom] = useState(false);
  const [zoomLoaded, setZoomLoaded] = useState(false);
  const [zoomLoading, setZoomLoading] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ left: 0, top: 0 });

  const { device, width: windowWidth } = useWindowSize();
  const { mountedAndShowed } = useOnScreen(imgRef);
  const shouldCover = (imgClass || "").includes("object-cover");

  const size = getSize(sizes, shouldCover ? Infinity : windowWidth, device);
  const zoomSize = allowZoom && getSize(zoomSizes || sizes, Infinity, device, true);
  const { width, imgWidth, imgHeight, aspectRatio } = size;
  const {
    width: zoomWidth,
    imgWidth: zoomImgWidth,
    imgHeight: zoomImgHeight,
    aspectRatio: zoomAspectRatio,
  } = zoomSize || {};

  const onMouseMove = (event) => {
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
  };

  const onMouseLeave = () => setZoom(false);

  const zoomSrc = allowZoom && buildSrc(src, zoomWidth, zoomQuality || quality);
  const imgSrc = zoomLoaded && zoomSrc ? zoomSrc : buildSrc(getSrc(src, !show), width, quality, !show);

  const isTouchable = isDeviceTouchable();

  const imgProps = {
    loading: loading || "lazy",
    alt,
    className: `w-full h-full pointer-events-none ${imgClass || ""}`,
    style: { ...(show ? null : blurStyle), ...(props.style || {}), aspectRatio },
  };

  const modalContext = useContext(ModalContext);
  const handleClick = (e) => {
    e.preventDefault();
    if (isTouchable && zoom && allowZoom && zoomLoaded)
      modalContext.openModal({
        ...imgProps,
        width: zoomImgWidth,
        height: zoomImgHeight,
        src: zoomSrc,
        aspectRatio: zoomAspectRatio,
      });
  };

  useEffect(() => {
    if (startLoadingZoom && allowZoom && zoomSrc && !zoomLoaded && !zoomLoading) {
      setZoomLoading(true);
      const img = new Image();
      img.onload = () => setZoomLoaded(true);
      img.src = zoomSrc;
    }
  }, [startLoadingZoom, allowZoom, zoomLoaded, zoomLoading]);

  useEffect(() => {
    if (mountedAndShowed && !show) {
      const { style } = imgRef.current || {};
      if (style?.filter) style.filter = "none";
      setShow(true);
    }
  }, [mountedAndShowed]);

  useEffect(() => {
    if (containerRef.current) containerRef.current.style = `aspect-ratio:${zoomLoaded ? zoomAspectRatio : aspectRatio}`;
  }, [aspectRatio, zoomAspectRatio, zoomLoaded]);
  return (
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
          if (onLoad && show) onLoad();
          if (show && allowZoom && !startLoadingZoom) setStartLoadingZoom(true);
        }}
        height={imgHeight}
      />

      {zoom && allowZoom && !isTouchable && zoomLoaded && (
        <div
          className="w-[200px] h-[200px] bg-no-repeat	rounded-[50%] pointer-events-none z-10 border border-gray-200"
          style={{
            position: "absolute",
            left: zoomPos.left,
            top: zoomPos.top,
            backgroundPosition: `${zoomPos.posLeft} ${zoomPos.posTop}`,
            backgroundImage: `url(${zoomSrc})`,
            backgroundSize: `${zoomImgWidth * zoomLevel}px ${zoomImgHeight * zoomLevel}px`,
          }}
        />
      )}
    </div>
  );
};

const getSrc = (src, shouldBlurr) => {
  const fileExtension = src.split(".").pop();
  const filenameWithoutExtension = src.substring(0, src.length - fileExtension.length - 1);
  return `${filenameWithoutExtension}${shouldBlurr ? "Blurry" : ""}.${fileExtension}`;
};

const blurStyle = { filter: "blur(20px)" };

const isMac = window.navigator.vendor.includes("Apple");
const buildSrc = (src, w, q, isBlur) => {
  const base = `${getCdn(src, w, q, isBlur)}/${src}`;
  if (isBlur) return `${base}?tr=q-76`;
  return `${base}?tr=w-${parseInt(w * (isMac ? 1.4 : 1.1))}${q ? `,q-${q}` : ""}`;
};

const getSize = (sizes, windowWidth, device, zoom) => {
  let newSizes = parseSize(sizes, windowWidth);
  let currentSize = (zoom ? newSizes["desktop-big"] : newSizes[device]) || Object.values(newSizes)[0];
  const { width, aspectRatio } = currentSize || {};
  currentSize.width = Math.min(width, windowWidth);
  currentSize.imgWidth = Math.min(width, windowWidth);
  currentSize.imgHeight = currentSize.imgWidth / aspectRatio;
  currentSize.height = currentSize.width / aspectRatio;
  currentSize.aspectRatio = currentSize.width / currentSize.height;
  return currentSize;
};

const devices = ["desktop-big", "desktop-mid", "desktop", "tablet-big", "tablet", "mobile"];
function parseSize(sizeString, windowWidth) {
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
  return sizes;
}

const correctWidth = (width, windowWidth) => {
  if (width && width?.includes?.("%"))
    return windowWidth === Infinity
      ? window.innerWidth * (parseFloat(width) / 100)
      : (parseFloat(width) / 100) * windowWidth;
  return width;
};

export default memo(ImageComponent);
