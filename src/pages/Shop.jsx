import Header from "../components/Header";
import { Section, useLoadingForDyanmicRoute } from "../components/staticComponents";
import ShopCategory from "../components/ShopCategory";
import Chairs from "./Chairs";
import ShopMain from "../components/ShopMain";

export function Shop() {
  useLoadingForDyanmicRoute();

  const id = new URL(window.location.href).pathname.split("/")[3];

  return (
    <div className="app h-screen h-screen z-0 relative flex flex-col">
      <div className="sticky w-max mx-auto top-0 md:py-7  py-2 z-10 md:top-[0] top-[107px]  overflow-visible">
        <ShopCategory />
      </div>
      <Section className="app__introduction h-auto relative z-0 h-full md:top-[-173px] top-[-131px]">
        <Header onShop />
      </Section>
      <ShopMain>
        {id === "karrige-gaming-zyre" ? (
          <Chairs />
        ) : (
          <h4 className="md:px-8 xxl:px-48 lg:px-6 px-2 text-center font-bold md:m-0 m-auto flex items-center h-full w-full">
            Ne do t'ju njoftojmë sapo produkti të jetë në rrugë, në mënyrë që ju të porosisni paraprakisht. Qëndroni ne
            pritje dhe na ndiqni!
          </h4>
        )}
      </ShopMain>
    </div>
  );
}

export default Shop;
