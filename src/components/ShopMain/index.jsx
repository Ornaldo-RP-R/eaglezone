const ShopMain = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <div
      className={`flex flex-auto justify-between w-screen xl:px-8 px-4 absolute md:top-[160px] top-[257px] bottom-[0] overflow-x-auto product-list ${
        className || ""
      }`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default ShopMain;
