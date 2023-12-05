import { useState } from "preact/hooks";
import { Picture, Section } from "../staticComponents";
import "./index.scss";
import useWindowSize from "../../hooks/useWindowSize";
import Arrow from "../../assets/images/arrow";
const srcs = ["embrioryLogos.png", "cushionAndLumber.png", "leatherQuality.png"];

const Quality = () => {
  const [activeSlide, setActiveSlide] = useState(srcs[0]);
  const { minTabletBig } = useWindowSize();
  const gridTemplateRows = `grid-rows-[${srcs.map((src) => (src === activeSlide ? "auto" : "51px")).join("_")}]`;

  return (
    <Section className="app__quality">
      <h2 className="text-center text-primary-700 lg:mb-8 mb-2 font-bold">Kualitet deri ne detaj</h2>
      <div className="flex flex-auto overflow-hidden">
        <div
          className={`grid lg:gap-0 gap-3 lg:pt-0 pt-2 ${
            minTabletBig ? gridTemplateRows : ""
          } lg:grid-cols-3 w-full border-t border-b border-white-800 dark:border-gray-800`}
        >
          <QualityReason
            setActiveSlide={setActiveSlide}
            activeSlide={activeSlide}
            title="Logo me qepje"
            description="Cdo logo eshte me qepje ne menyre qe te zgjase, me nje dizanj unik qe garanton bukuri dhe kualitet."
            src={srcs[0]}
            alt="Logo me qepje cilesi e garantuar per nje karrige gaming"
          />
          <QualityReason
            setActiveSlide={setActiveSlide}
            activeSlide={activeSlide}
            title="Jastiket e rehatshem"
            description="Me perberje nga meteriale te buta sfungjeri. Jastiku i karriges Martial pershtatet me mesin tuaj!"
            src={srcs[1]}
            alt="Jastike me sfungjer te bute materiali me i mire ne treg"
          />
          <QualityReason
            setActiveSlide={setActiveSlide}
            activeSlide={activeSlide}
            title="Lekure e perzgjedhur"
            description="Lekure e zgjedhur me cilesi te larte posacerisht për komoditetin dhe fortesine e karriges së lojerave."
            src={srcs[2]}
            hasBorder={false}
            alt="Lekure posacerisht per karrige loje me mikrofibra sintetike te bashkuar per te krijuar eksperiencen e duhur"
          />
        </div>
      </div>
    </Section>
  );
};

const QualityReason = (props) => {
  const { title, description, hasBorder = true, activeSlide, setActiveSlide, ...imgProps } = props;
  const { src } = imgProps || {};
  const onClick = () => setActiveSlide(src);
  const isActive = activeSlide === src;
  const { minTabletBig } = useWindowSize();

  const titleChild = minTabletBig ? (
    <div onClick={onClick} className={`flex items-center justify-between pb-1 ${isActive ? "" : "cursor-pointer"}`}>
      {title}
      {!isActive && <Arrow className="h-[40px]" />}
    </div>
  ) : (
    title
  );
  return (
    <div
      className={`relative w-full h-full ${
        hasBorder ? `${minTabletBig ? "border-b" : "border-r"} border-white-800 dark:border-gray-800` : ""
      } lg:p-4 pb-4 flex flex-col h-full overflow-hidden`}
    >
      <p className="w-full">{titleChild}</p>
      <span className="mb-6 text-white-600 dark:text-gray-800 lg:flex hidden">{description}</span>
      {(isActive || !minTabletBig) && (
        <div className="flex flex-auto overflow-hidden">
          <Picture
            className="h-full w-full"
            imgClass="object-left-top object-cover rounded-xl w-full h-full"
            loading="lazy"
            allowZoom
            zoomSizes="desktop-big=1915,0.74626865671"
            sizes="desktop-big=40%,0.74626865671;tablet-big=95%"
            {...imgProps}
            zoomLevel={0.6}
          />
        </div>
      )}
    </div>
  );
};

export default Quality;
