import React from "preact/compat";

const Section = (props) => {
  const { className, children } = props;
  return (
    <div className={`xxl:py-8 xxl:px-8 md:py-6 p-4 relative flex flex-col h-full overflow-hidden ${className || ""}`}>
      {children}
    </div>
  );
};

export default Section;
