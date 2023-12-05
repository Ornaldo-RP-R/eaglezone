import { copyToClipboard, isDeviceTouchable } from "../../helpers";
import useWindowSize from "../../hooks/useWindowSize";

const InstagramLink = (props) => {
  const { children, instagramName } = props;
  const { isMobile } = useWindowSize();

  const onClick = () => copyToClipboard(instagramName);
  return (
    <a
      href={
        isDeviceTouchable()
          ? `instagram://user?username=${instagramName}`
          : `https://www.instagram.com/${instagramName}/`
      }
      target="blank"
    >
      <button type="button" aria-label={isMobile ? "Vizitoni instagramin tonë" : undefined} onClick={onClick}>
        {children}
      </button>
    </a>
  );
};

export default InstagramLink;
