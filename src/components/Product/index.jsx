import React from "preact/compat";
import Image from "../Image";
import Link from "../Link";

const Product = (props) => {
  const { title, href, color, isLast, ...imgProps } = props;
  return (
    <div className={`xl:pt-4 xl:mt-4 py-1 pb-3 w-full ${isLast ? "" : "xl:mr-6 mr-2"} min-w-max`}>
      <Link
        href={href}
        aria-label={props["aria-label"]}
        className={`flex h-full p-4 pb-0 flex-col product is--${color}`}
      >
        <Image loading="eager" qualtiy={80} className="w-full mb-auto" {...imgProps} />
        <p className="product__title">{title}</p>
      </Link>
    </div>
  );
};

export default Product;
