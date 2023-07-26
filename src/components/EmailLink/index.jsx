import { copyToClipboard } from "../../helpers";

const EmailLink = (props) => {
  const { subject, body, children, email } = props;

  const handleClick = (e) => {
    e.preventDefault();
    copyToClipboard(email);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <a href="#" onClick={handleClick} aria-label="Na shkruaj email ne eaglezoneal@gmail.com">
      {children}
    </a>
  );
};

export default EmailLink;
