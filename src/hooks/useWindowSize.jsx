import { useEffect, useState } from "preact/hooks";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateWindowDimensions, true);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions, true);
    };
  }, []);

  const devicesVisibility = { isMobile: width < 576 };
  devicesVisibility.isTablet = !devicesVisibility.isMobile && width < 768;
  devicesVisibility.isTabletBig = !devicesVisibility.isTablet && width < 992;
  devicesVisibility.isDesktop = !devicesVisibility.isTabletBig && width < 1200;
  devicesVisibility.isDesktopMid = !devicesVisibility.isDesktop && width < 1400;
  devicesVisibility.isDesktopBig = width >= 1400;
  devicesVisibility.minTablet = width < 768;
  devicesVisibility.minTabletBig = width < 992;
  devicesVisibility.minDesktop = width < 1200;
  devicesVisibility.minDesktopMid = width < 1400;
  devicesVisibility.minDesktopBig = width >= 1400;
  let device = Object.keys(devicesVisibility).find((key) => !!devicesVisibility[key]);
  device = (device || "")
    .slice(2)
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
  const deviceNames = Object.keys(devicesVisibility);
  return { ...devicesVisibility, width, height, device, deviceNames };
};

export default useWindowSize;
