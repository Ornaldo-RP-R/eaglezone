import React from "react";
import { copyToClipboard, isDeviceTouchable } from "../../helpers";

const InstagramLink = (props) => {
  const { children, instagramName } = props;
  const onClick = (e) => {
    e.preventDefault();
    copyToClipboard(instagramName);
    window.open(
      isDeviceTouchable() ? `instagram://user?username=${instagramName}` : `https://www.instagram.com/${instagramName}/`
    );
  };
  return (
    <a
      href="#"
      aria-label={`Na vizito ne faqen tone te instagramit me emer ${instagramName}`}
      target="_blank"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default InstagramLink;
