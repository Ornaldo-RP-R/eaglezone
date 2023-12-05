import { copyToClipboard, facebookName } from "../../helpers";
import useWindowSize from "../../hooks/useWindowSize";

const MessengerLink = (props) => {
  const { recipientId, message, children } = props;
  const { isMobile } = useWindowSize();

  const onClick = () => copyToClipboard(facebookName);

  return (
    <a href={`https://m.me/${recipientId}?ref=${encodeURIComponent(message)}`} target="_blank">
      <button aria-label={isMobile ? "Na shkruani ne facebook" : undefined} type="button" onClick={onClick}>
        {children}
      </button>
    </a>
  );
};

export default MessengerLink;
