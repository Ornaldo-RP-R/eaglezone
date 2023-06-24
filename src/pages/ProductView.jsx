import React from "react";
import Image from "../components/Image";
import { useState, useEffect } from "preact/hooks";
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
import Link from "../components/Link";
import useWindowSize from "../hooks/useWindowSize";

const products = {
  "scout-m-red": {
    title: "Scout-M",
    color: "primary",
    price: "249 €",
    gallery: [
      {
        src: "scoutFrontRed.png",
        aspectRatio: "0.55764075067",
        zoomSizes: `desktop-big=1872,0.55764075067`,
        zoomLevel: 0.6,
      },
      {
        src: "scoutRedBack.png",
        aspectRatio: "0.541",
        zoomSizes: `desktop-big=1762,0.541`,
      },
      {
        src: "scoutRedStretched.png",
        aspectRatio: "1.812",
        zoomSizes: `desktop-big=3278,1.812`,
        imgClass: "max-w-full mx-auto rounded-r-xl w-full",
      },
      {
        src: "scoutRedBottomView.png",
        aspectRatio: "0.813",
        zoomSizes: `desktop-big=2916,0.813`,
      },
      {
        src: "scoutRedLumbar.png",
        aspectRatio: "1.243",
        zoomSizes: `desktop-big=4975,1.243`,
        zoomLevel: 0.5,
      },
      {
        src: "scoutRedSide.png",
        aspectRatio: "0.558",
        zoomSizes: `desktop-big=3349,0.558`,
        zoomLevel: 0.7,
      },
      {
        src: "scoutRedTop.png",
        aspectRatio: "1.028",
        zoomSizes: `desktop-big=3601,1.028`,
        zoomLevel: 0.5,
      },
    ],
    features: [
      "I rehatshem",
      "Ergonomike dhe Krahe 4D",
      "Mbeshtetese per mesin dhe koken",
      "logo me qepje",
      "shtrihet deir 180 deg",
      "Design unik",
    ],
  },
  "scout-m-green": {
    title: "Scout-M",
    color: "tertiary",
    price: "249 €",
    gallery: [
      {
        src: "scoutFrontGreen.png",
        aspectRatio: "0.55764075067",
        zoomSizes: `desktop-big=1872,0.55764075067`,
        zoomLevel: 0.6,
      },
      {
        src: "scoutGreenBack.png",
        aspectRatio: "0.542",
        zoomSizes: `desktop-big=1851,0.542`,
      },
      {
        src: "scoutGreenStretched.png",
        aspectRatio: "1.808",
        zoomSizes: `desktop-big=3468,1.808`,
        imgClass: "max-w-full mx-auto rounded-r-xl w-full",
      },
      {
        src: "scoutGreenBottomView.png",
        aspectRatio: "0.863",
        zoomSizes: `desktop-big=3009,0.863`,
      },
      {
        src: "scoutGreenLumbar.png",
        aspectRatio: "1.239",
        zoomSizes: `desktop-big=3009,1.239`,
        zoomLevel: 0.5,
      },
      {
        src: "scoutGreenSide.png",
        aspectRatio: "0.5895",
        zoomSizes: `desktop-big=3537,0.5895`,
      },
      {
        src: "scoutGreenTop.png",
        aspectRatio: "1.136",
        zoomSizes: `desktop-big=4098,1.136`,
        zoomLevel: 0.6,
      },
    ],
    features: [
      "I rehatshem",
      "Ergonomike dhe Krahe 4D",
      "Mbeshtetese per mesin dhe koken",
      "logo me qepje",
      "shtrihet deir 180 deg",
      "Design unik",
    ],
  },
  "martial-m-orange": {
    title: "Martial-M",
    price: "395 €",
    color: "orange",
    gallery: [
      {
        src: "martial45deg.png",
        aspectRatio: "0.57044980637",
        zoomSizes: `desktop-big=1915,0.57044980637`,
        zoomLevel: 0.6,
      },
      {
        src: "martialBack.png",
        aspectRatio: "0.51805555555",
        zoomSizes: `desktop-big=1119,0.51805555555`,
      },
      {
        src: "martialStretched.png",
        aspectRatio: "1.84037015616",
        imgClass: "max-w-full mx-auto rounded-r-xl w-full",
        zoomSizes: `desktop-big=3182,1.84037015616`,
        zoomLevel: 0.6,
      },
      {
        src: "martialBottomView.png",
        aspectRatio: "0.87881263616",
        zoomSizes: `desktop-big=3227,0.87881263616`,
        zoomLevel: 0.4,
      },
      {
        src: "martialLumbar.png",
        aspectRatio: "1.47959183673",
        zoomSizes: `desktop-big=4495,1.47959183673`,
        zoomLevel: 0.4,
      },
      {
        src: "martialSide.png",
        aspectRatio: "0.77306182531",
        zoomSizes: `desktop-big=3151,0.77306182531`,
        zoomLevel: 0.4,
      },
      {
        src: "martialTop.png",
        aspectRatio: "1.02857142857",
        zoomSizes: `desktop-big=3276,1.02857142857`,
        zoomLevel: 0.4,
      },
    ],
    features: [
      "Rehati gjatë gjithë ditës",
      "Karrige premium lëkure",
      "Ergonomike dhe Krahe 4D",
      "Mbeshtetese per mesin dhe koken",
      "logo me qepje",
      "shtrihet deir 180 deg",
      "Trashesi perfekte",
      "Design unik",
    ],
  },
};

export function ProductView(props) {
  const { setLoading } = props;
  useEffect(() => {
    setLoading(false);
  }, []);

  const id = new URL(window.location.href).pathname.split("/")[3];
  const product = products[id] || {};
  const { gallery, title, features = [], price, color } = product;
  const { minTablet } = useWindowSize();
  const [selectedImage, setSelectedImage] = useState(gallery?.[0]);
  if ((gallery || []).map((g) => g?.src).indexOf(selectedImage?.src) === -1) setSelectedImage(gallery?.[0]);
  function getNextOrPrevId(direction) {
    const keys = Object.keys(products);
    const currentIndex = keys.indexOf(id);
    let nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = [keys.length - 1];
    if (nextIndex >= keys.length) nextIndex = 0;
    return keys[nextIndex];
  }

  let nextId = getNextOrPrevId("next");
  let prevId = getNextOrPrevId("prev");

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
                <Image
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
        <div className="lg:h-full lg:pt-0 pt-[74px] h-[50vh] m-0 px-[25px] lg:pl-[125px] lg:min-w-[70vw] lg:max-w-[70vw] lg:w-[70vw] min-w-full max-w-full w-full rounded-r-xl flex bg-gray-800">
          <Image
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
        <div className="flex flex-auto lg:w-[30vw]">
          <div className="flex flex-col w-full px-6 gap-2">
            <div className="flex justify-between">
              <div className="flex">
                <Link href="" className="flex my-auto" aria-label="Shko ne fillim te faqes">
                  <svg
                    height="30"
                    viewBox="0 0 32 32"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer my-auto mr-1 fill-white-900"
                  >
                    <path d="m0 14.016 2.016 1.984h4v14.016q0 .832.576 1.408t1.408.576h4v-8q0-.832.576-1.408t1.44-.576h4q.8 0 1.408.576t.576 1.408v8h4q.832 0 1.408-.576t.608-1.408v-14.016h4l1.984-1.984-16-14.016zm12 0q0-1.664 1.184-2.848t2.816-1.152 2.816 1.152 1.184 2.848-1.184 2.816-2.816 1.184-2.816-1.184-1.184-2.816z" />
                  </svg>
                </Link>

                <Link href={`shop/karrige/${prevId}`} className="flex my-auto">
                  <button role="button" aria-label="Shko ne faqen mbrapa" className="next h-[40px]">
                    <Arrow className="h-full" />
                  </button>
                </Link>
              </div>
              <h6 className={`text-${color}-700 w-full text-center`}>{title}</h6>
              <Link href={`shop/karrige/${nextId}`} className="flex my-auto">
                <button role="button" aria-label="Shko ne faqen pas" className="prev h-[40px]">
                  <Arrow className="h-full" />
                </button>
              </Link>
            </div>

            <ul className="flex lg:flex-col justify-between gap-4 mt-auto flex-wrap">
              {(minTablet ? features?.slice?.(0, 4) : features).map((f) => (
                <span
                  className="text-white-700 flex lg:w-auto lg:min-w-full lg:max-w-auto w-[346px] min-w-[40vw] max-w-full"
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
                      className={`fill-${color}-400`}
                    />
                  </svg>
                  <label className="relative top-0.5">{f}</label>
                </span>
              ))}
            </ul>
            <div className="flex flex-col mt-auto">
              <p className="text-white-900 text-center relative top-5 flex gap-2 justify-center">
                Cmimi: <h4 className="text-secondary-600 top-[-6px] relative">{price}</h4>
              </p>
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
}

export default ProductView;
