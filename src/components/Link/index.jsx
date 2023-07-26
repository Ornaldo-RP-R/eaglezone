const Link = (props) => {
  const { children, href, onClick, ...otherProps } = props;

  const handleClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, null, `${window.location.origin}/${href}`);
    onClick && onClick();
  };

  return (
    <a href="#" aria-label={props["aria-label"] || "Go to"} onClick={handleClick} {...otherProps}>
      {children}
    </a>
  );
};

export default Link;
