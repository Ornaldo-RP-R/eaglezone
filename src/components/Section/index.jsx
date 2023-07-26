const Section = (props) => {
  const { className, children, overflowClass } = props;
  return (
    <div
      className={`xxl:py-8 xxl:px-8 md:py-6 p-4 relative flex flex-col h-full ${overflowClass || "overflow-hidden"} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
