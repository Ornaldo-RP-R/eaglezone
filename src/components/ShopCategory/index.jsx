import { Link } from "wouter-preact";
import { Picture } from "../staticComponents";
import "./index.scss";

const ShopCategory = () => {
  return (
    <div className="flex sticky top-0 w-full justify-center z-10 w-max mx-auto">
      <div className="flex categories md:gap-12 gap-6 md:justify-start md:w-auto md:px-0 px-4 w-screen justify-between overflow-auto">
        <CategoryItem
          title="Karrige"
          activeTitle="karrige-gaming-zyre"
          src="martial45deg.png"
          alt="Kategoria e karrigeve te Eagle Zone Gaming Albania"
          sizes="desktop-big=200,0.57044980637"
        />
        <CategoryItem
          title="Maus"
          src="mice.png"
          alt="Kategoria e mauseve te Eagle Zone Gaming Albania"
          sizes="desktop-big=200,0.58792184724"
        />
        <CategoryItem
          title="Audio"
          src="audio.png"
          alt="Kategoria e audios te Eagle Zone Gaming Albania"
          sizes="desktop-big=200,0.62166962699"
        />
        <CategoryItem
          title="Tastjere"
          src="keyboard.png"
          alt="Kategoria e tastjerave te Eagle Zone Gaming Albania"
          sizes="desktop-big=200,1.20959147425"
        />
        <CategoryItem
          title="Pajisje"
          src="gears.png"
          alt="Kategoria e pajisjeve te Eagle Zone Gaming Albania"
          sizes="desktop-big=200,0.66785079929"
        />
      </div>
    </div>
  );
};

const CategoryItem = (props) => {
  const { title, activeTitle, ...imgProps } = props;
  const id = new URL(window.location.href).pathname.split("/")[3];
  const currentId = activeTitle || title.toLowerCase();
  const isActive = id === currentId;
  return (
    <Link href={currentId}>
      <a
        className={`flex flex-col gap-[2px] categories__item z-100 cursor-pointer relative ${
          isActive ? "is--active" : ""
        }`}
      >
        <Picture fixedWidth className="max-h-[90px]" loading="eager" hasNotPreview {...imgProps} />
        <span className="font-small w-full text-center">{title}</span>
      </a>
    </Link>
  );
};

export default ShopCategory;
