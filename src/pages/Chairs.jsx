import "./chairs.scss";
import { Fragment } from "preact/compat";
import Product from "../components/Product";

const Chairs = () => {
  return (
    <Fragment>
      <Product
        href="karrige-gaming-zyre/martial-m"
        title="Shiko Martial tani"
        color="orange"
        src="martial45deg.png"
        alt="Martial M karrige gaming e kthyer 45 deg me jastik per koken"
        sizes="desktop-big=20%,0.57044980637;tablet=100%,0.57044980637"
      />
      <Product
        href="karrige-gaming-zyre/scout-m-red"
        color="red"
        title="Shiko Scout tani"
        src="scoutFrontRed.png"
        alt="Scout M karrike gaming pamje e perparme me jastik per koken dhe kurrizin"
        sizes="desktop-big=20%,0.55764075067;tablet=100%,0.55764075067"
      />
      <Product
        isLast
        href="karrige-gaming-zyre/scout-m-green"
        color="green"
        title="Shiko Scout tani"
        src="scoutFrontGreen.png"
        alt="Scout M karrike loje pamje e perparme me jastik per koken dhe mesin"
        sizes="desktop-big=20%,0.55764075067;tablet=100%,0.55764075067"
      />
    </Fragment>
  );
};

export default Chairs;
