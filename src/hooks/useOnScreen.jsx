import { useState, useRef, useLayoutEffect, useMemo, useEffect } from "react";

export default function useOnScreen(ref, options, mount = true) {
  let { current: observer } = useRef();
  let { current: observed } = useRef();

  const [entry, setEntry] = useState({});
  const { isIntersecting, isVisible } = entry;
  const [mounted, setIsMounted] = useState(false);
  const mountedAndShowed = useMemo(() => !!mounted && !!isIntersecting, [mounted, isIntersecting]);

  useLayoutEffect(() => {
    if (mount) {
      setIsMounted(true);
      observer = new IntersectionObserver(([entry]) => {
        setEntry({
          isIntersecting: entry.isIntersecting || !window.IntersectionObserver,
          isVisible: entry.intersectionRatio > 0,
        });
      }, options);
    }
    return () => {
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!observed && ref?.current && mount) {
      observed = true;
      observer?.observe(ref.current);
    }
  }, [!observed && ref]);

  return { mountedAndShowed, isIntersecting, mounted, isVisible };
}
