import React from "preact/compat";
import { copyToClipboard } from "../../helpers";

const WhatsappLink = (props) => {
  const { children, message, phone } = props;
  const onClick = (e) => {
    e.preventDefault();
    copyToClipboard(`+${phone}`);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };
  return (
    <a href="#" aria-label={`na kontakto ne whatsapp me numrin ${phone}`} target="_blank" onClick={onClick}>
      {children}
    </a>
  );
};

export default WhatsappLink;
