import { Link } from "wouter-preact";
import { Picture } from "../staticComponents";

const Product = (props) => {
  const { title, href, color, isLast, ...imgProps } = props;
  return (
    <div className={`xl:pt-4 xl:mt-4 py-1 pb-3 w-full ${isLast ? "" : "xl:mr-6 mr-2"} min-w-max`}>
      <Link href={href}>
        <a className={`flex h-full p-4 pb-0 flex-col product is--${color}`}>
          <Picture loading="eager" qualtiy={80} className="w-full mb-auto" {...imgProps} />
          <p className="product__title">{title}</p>
        </a>
      </Link>
    </div>
  );
};

export default Product;
