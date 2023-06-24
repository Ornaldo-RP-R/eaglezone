import React from "preact/compat";
import { useState } from "preact/hooks";
import Image from "../../components/Image";
import Section from "../../components/Section";
import "./index.scss";
import useWindowSize from "../../hooks/useWindowSize";

const Adjustable = () => {
  const [color, setColor] = useState("green");
  const otherColor = color === "green" ? "red" : "green";
  const capitalizeColor = color.charAt(0).toUpperCase() + color.slice(1);
  const capitalizeOtherColor = otherColor.charAt(0).toUpperCase() + otherColor.slice(1);
  const classColor = color === "green" ? "tertiary" : "primary";
  const { isMobile, width, height } = useWindowSize();
  const heightLeftForImage = height - 146;
  const widthLeftForIamge = width - 32;
  const imageHeight = 1.01735804648 * widthLeftForIamge;
  const showBothOnMobile = heightLeftForImage >= 1.8 * imageHeight && isMobile;
  return (
    <Section className={`app__adjustable is--${color}`}>
      <h2 className={`text-${classColor}-800 text-center`}>Dizajn Ergonomik</h2>
      <span className="text-center font-small text-gray-500 pt-2">
        {`${
          isMobile
            ? "Per rehati maksimale"
            : "Pershtateni për çdo nevojë tuajën me opsione të shumta për rehati maksimale"
        }`}
      </span>
      <div className="flex flex-auto my-auto sm:flex-row flex-col overflow-hidden sm:pt-4 pt-1 sm:justify-center items-start">
        {showBothOnMobile ? (
          <Image
            className="sm:m-0 mb-auto mt-0 sm:mb-0 sm:h-auto h-full max-w-full max-h-full "
            key={capitalizeOtherColor}
            src={`adjustableScout${capitalizeOtherColor}.png`}
            loading="lazy"
            allowZoom
            zoomLevel={0.35}
            alt="Karrige Scout M gaming qe shtrihet 180 grade , ne ngjyre te kuqe ose jeshile dhe me lartesi te regullueshme"
            sizes="desktop-big=952,1.01735804648"
            zoomSizes="desktop-big=2470,1.01735804648"
          />
        ) : (
          <div className="flex sm:flex-col sm:w-auto w-full sm:gap-8 justify-center sm:justify-start gap-4 select__color sm:mt-2 sm:mb-0 mb-4 pt-4 mt-auto mr-6">
            <Circle color="green" classColor="tertiary" setColor={setColor} isActive={color === "green"} />
            <Circle color="red" classColor="primary" setColor={setColor} isActive={color === "red"} />
          </div>
        )}

        <Image
          className="sm:m-0 mb-auto mt-0 sm:mb-0 sm:h-auto h-full max-w-full max-h-full "
          key={capitalizeColor}
          src={`adjustableScout${capitalizeColor}.png`}
          loading="lazy"
          allowZoom
          zoomLevel={0.7}
          alt="Karrige Scout M gaming qe shtrihet 180 grade , ne ngjyre te kuqe ose jeshile dhe me lartesi te regullueshme"
          sizes="desktop-big=952,1.01735804648"
          zoomSizes="desktop-big=2470,1.01735804648"
        />
      </div>
    </Section>
  );
};

const Circle = (props) => {
  const { color, classColor, setColor, isActive } = props;
  return (
    <button
      role="button"
      aria-label="Zgjidh ngjyren e Scout M jeshile ose te gjelber ose te kuqe"
      onClick={() => setColor(color)}
      className={`color__circle cursor-pointer ${
        isActive ? "is--active" : ""
      } rounded-[50%] bg-${classColor}-700 lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] is--${color}`}
    />
  );
};

export default Adjustable;
