import { copyToClipboard } from "../../helpers";
import useWindowSize from "../../hooks/useWindowSize";

const EmailLink = (props) => {
  const { subject, body, children, email } = props;
  const { isMobile } = useWindowSize();

  const handleClick = () => copyToClipboard(email);

  return (
    <a href={`mailto:${email}?subject=${subject}&body=${body}`} target="_blank">
      <button type="button" onClick={handleClick} aria-label={isMobile ? "Na dërgoni email" : undefined}>
        {children}
      </button>
    </a>
  );
};

export default EmailLink;
