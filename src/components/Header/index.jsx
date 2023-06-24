import React from "react";
import LightKey from "../LightKey";
import { Link } from "wouter";
import "./index.scss";

const Header = (props) => {
  const { onShop } = props;
  return (
    <header className="flex justify-between">
      <Link href="/" aria-label="Shko tek fillimi i faqes">
        {logo}
      </Link>
      <LightKey />

      {!onShop && (
        <div className="z-10 flex flex-col gap-2">
          <Link href="shop/karrige" aria-label="Shko tek faqja e dyqanit / shop-it">
            <p className="cursor-pointer font-small shop-btn cursor-pointer">SHOP</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export const logo = (
  <img
    src="https://ttatente.sirv.com/logo.svg"
    alt="Logo e Eeagle Zone Gaming Albania"
    height="100"
    width="100"
    className="md:h-[100px] h-[70px] md:w-[100px] w-[70px] cursor-pointer"
  />
);

export default Header;
