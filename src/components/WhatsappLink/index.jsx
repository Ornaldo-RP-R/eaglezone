import React from "preact/compat";
import { copyToClipboard } from "../../helpers";
import useWindowSize from "../../hooks/useWindowSize";

const WhatsappLink = (props) => {
  const { children, message, phone } = props;
  const { isMobile } = useWindowSize();

  const onClick = () => copyToClipboard(`+${phone}`);

  return (
    <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank">
      <button aria-label={isMobile ? "Na kontaktoni ne Whatsapp" : undefined} type="button" onClick={onClick}>
        {children}
      </button>
    </a>
  );
};

export default WhatsappLink;
