import { Picture, useLoadingForDyanmicRoute } from "../components/staticComponents";
import { useState } from "preact/hooks";
import "./product-view.scss";
import InstagramLink from "../components/InstagramLink";
import WhatsappLink from "../components/WhatsappLink";
import MessengerLink from "../components/MessengerLink";
import EmailLink from "../components/EmailLink";
import { Social } from "../components/Footer";
import messenger from "../assets/images/messenger";
import { email, instagramName, phone } from "../helpers";
import gmail from "../assets/images/gmail";
import whatsapp from "../assets/images/whatsapp";
import instagram from "../assets/images/instagram";
import Arrow from "../assets/images/arrow";
import useWindowSize from "../hooks/useWindowSize";
import fireReduxAction from "../redux/actions/fireReduxAction";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux/types";
import database from "../constants";
import { connect } from "redux-zero/preact";
import { Link } from "wouter-preact";

const ProductView = (props) => {
  const { cartIds } = props;
  useLoadingForDyanmicRoute();

  const urlKey = new URL(window.location.href).pathname.split("/")[4];
  const product = database.products[urlKey] || {};
  const { gallery, title, features = [], price, color, textClassName, fillClassName, id } = product;
  const { minTablet } = useWindowSize();
  const [selectedImage, setSelectedImage] = useState(gallery?.[0]);
  if ((gallery || []).map((g) => g?.src).indexOf(selectedImage?.src) === -1) setSelectedImage(gallery?.[0]);
  function getNextOrPrevId(direction) {
    const keys = Object.keys(database.products);
    const currentIndex = keys.indexOf(urlKey);
    let nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = [keys.length - 1];
    if (nextIndex >= keys.length) nextIndex = 0;
    return keys[nextIndex];
  }

  let nextId = getNextOrPrevId("next");
  let prevId = getNextOrPrevId("prev");
  const addedToCart = cartIds.includes(id);
  return (
    price && (
      <div className="w-screen h-screen lg:py-4 rounded-r-xl flex relative flex lg:flex-row flex-col">
        <div className="lg:flex views hidden flex-col gap-4 bottom-[25px] flex-wrap absolute left-[25px] top-[25px] w-[80px] min-w-[80px]">
          {(gallery || []).map((image) => {
            const { src, aspectRatio } = image;
            return (
              <div
                onClick={() => setSelectedImage(image)}
                className={`w-[80px] min-w-[80px] h-[80px] min-h-[80px] border p-1 rounded-md cursor-pointer small-view is--${color} ${
                  selectedImage?.src === src ? "is-active" : ""
                }`}
              >
                <Picture
                  key={src}
                  hasNotPreview
                  quality={70}
                  className="h-full w-full m-auto rounded-md"
                  imgClass="m-auto rounded-md"
                  sizes={`desktop-big=160,${aspectRatio}`}
                  src={src}
                  alt="Njera nga pjeset e gallerise se Eagle Zone"
                />
              </div>
            );
          })}
        </div>
        <div className="lg:h-full lg:pt-0 pt-[74px] h-[50svh] m-0 px-[25px] lg:pl-[125px] lg:min-w-[70svw] lg:max-w-[70svw] lg:w-[70svw] min-w-full max-w-full w-full rounded-r-xl flex bg-gray-800 dark:bg-white-800">
          <Picture
            loading="eager"
            key={JSON.stringify(selectedImage)}
            quality={76}
            className={`max-w-full max-h-full ${selectedImage?.imgClass || "h-full mx-auto rounded-r-xl"}`}
            imgClass="py-2 rounded-r-xl"
            src={selectedImage?.src}
            allowZoom
            zoomLevel={selectedImage?.zoomLevel || 0.7}
            zoomQuality={95}
            alt="Pamje e produktit te Eagle Zone Gaming ne baze te fotos se gallerise"
            sizes={`desktop-big=80%,${selectedImage?.aspectRatio};tablet-big=95%,${selectedImage?.aspectRatio}`}
            zoomSizes={selectedImage?.zoomSizes}
          />
        </div>
        <div className="flex flex-auto lg:w-[30svw]">
          <div className="flex flex-col w-full px-6 gap-2">
            <div className="flex justify-between">
              <div className="flex">
                <Link href="/">
                  <a className="flex my-auto">
                    <button type="button" aria-label="Shko ne fillim te faqes">
                      <svg
                        height="30"
                        viewBox="0 0 32 32"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer my-auto mr-1 fill-current text-white-900 dark:text-gray-900"
                      >
                        <path d="m0 14.016 2.016 1.984h4v14.016q0 .832.576 1.408t1.408.576h4v-8q0-.832.576-1.408t1.44-.576h4q.8 0 1.408.576t.576 1.408v8h4q.832 0 1.408-.576t.608-1.408v-14.016h4l1.984-1.984-16-14.016zm12 0q0-1.664 1.184-2.848t2.816-1.152 2.816 1.152 1.184 2.848-1.184 2.816-2.816 1.184-2.816-1.184-1.184-2.816z" />
                      </svg>
                    </button>
                  </a>
                </Link>

                <Link href={prevId}>
                  <a className="flex my-auto">
                    <button type="button" aria-label="Shko ne faqen mbrapa" className="next h-[40px]">
                      <Arrow className="h-full" />
                    </button>
                  </a>
                </Link>
              </div>
              <h6 className={`${textClassName || ""} w-full text-center`}>{title}</h6>
              <Link href={nextId}>
                <a className="flex my-auto">
                  <button type="button" aria-label="Shko ne faqen pas" className="prev h-[40px]">
                    <Arrow className="h-full" />
                  </button>
                </a>
              </Link>
            </div>

            <div className="flex lg:flex-col justify-between gap-4 mt-auto flex-wrap">
              {(minTablet ? features?.slice?.(0, 4) : features).map((f) => (
                <span
                  className="text-white-700 dark:text-gray-700 flex lg:w-auto lg:min-w-full lg:max-w-auto w-[346px] min-w-[40svw] max-w-full"
                  key={f}
                >
                  <svg
                    fill="none"
                    height="28"
                    className="mr-2"
                    viewBox="0 0 20 20"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m3 10a7 7 0 0 1 9.307-6.611 1 1 0 0 0 .658-1.889 9 9 0 1 0 5.98 7.501 1 1 0 0 0 -1.988.22 7 7 0 1 1 -13.957.779zm14.75-5.338a1 1 0 0 0 -1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 0 0 -1.264 1.55l3.929 3.2a1 1 0 0 0 1.38-.113l7.072-8z"
                      fill-rule="evenodd"
                      className={fillClassName}
                    />
                  </svg>
                  <label className="relative top-0.5">{f}</label>
                </span>
              ))}
            </div>
            <div className="flex flex-col mt-auto items-center">
              <p className="text-white-900 dark:text-gray-900 text-center relative flex gap-2 justify-center">
                Cmimi:{" "}
                <h4 className={`${textClassName} top-[-10px] relative`}>{`${price.toLocaleString("en-AL")} Lek`}</h4>
              </p>
              <button
                type="button"
                className={`button flex gap-2 is-small w-max is-${color}`}
                onClick={() => {
                  fireReduxAction(addedToCart ? REMOVE_FROM_CART : ADD_TO_CART, id);
                }}
              >
                {addedToCart ? "Hiq nga" : "Shto ne"} shporte
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-900" height={25} viewBox="0 0 256 256">
                  <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                </svg>
              </button>
              <span className={`mx-auto font-small font-normal mb-1 text-center top-2 relative`}>
                Per me shume na kontaktoni :
              </span>

              <div className="flex gap-4 items-between mx-auto">
                <InstagramLink instagramName={instagramName}>
                  <Social
                    type="instagram"
                    Icon={instagram}
                    className="is__instagram description lg:h-[30px] h-[28px]"
                  />
                </InstagramLink>

                <WhatsappLink phone={phone} message={`Hello `}>
                  <Social Icon={whatsapp} type="whatsapp" />
                </WhatsappLink>
                <MessengerLink recipientId="107440865621851" message={`Hello `}>
                  <Social
                    Icon={messenger}
                    type="messenger"
                    className="lg:h-[30px] h-[28px] lg:min-h-[30px] min-h-[28px]"
                  />
                </MessengerLink>

                <EmailLink
                  email={email}
                  subject="Having%20question&amp"
                  body="To%20Eagle%20Zone%20Staff,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20have%20some%20questions.%0D%0A%5BTELL%20US%20ABOUT%20YOUR%20REQUEST%20HERE%5D%0D%0A%0D%0AThanks%20for%20your%20help.%20Looking%20forward%20to%20hearing%20back%20from%20you%20soon.%0D%0A%0D%0ABest%20regards,%0D%0A%5BFill%20YOUR%20INFO%20HERE%20(name,email,number%20etc...)%5D"
                >
                  <Social Icon={gmail} type="gmail" />
                </EmailLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapToProps = ({ cart }) => ({ cart, cartIds: (cart || []).map((i) => i?.id) });
export default connect(mapToProps)(ProductView);
