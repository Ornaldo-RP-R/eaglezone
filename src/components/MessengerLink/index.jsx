import { copyToClipboard, facebookName } from "../../helpers";

const MessengerLink = (props) => {
  const { recipientId, message, children } = props;
  const onClick = (e) => {
    e.preventDefault();
    copyToClipboard(facebookName);
    window.open(`https://m.me/${recipientId}?ref=${encodeURIComponent(message)}`);
  };
  return (
    <a
      href="#"
      aria-label={`Per me teper na shkruaj nje mesazh ne messenger ne emrin ${facebookName}`}
      target="_blank"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default MessengerLink;
