import LightKey from "../LightKey";
import { Link } from "wouter-preact";
import "./index.scss";
import { connect } from "redux-zero/preact";
import { Dropdown } from "../staticComponents";
import fireReduxAction from "../../redux/actions/fireReduxAction";
import { LOGOUT } from "../../redux/types";
import database from "../../constants";

const Header = (props) => {
  const { onShop, user } = props;

  return (
    <header className="flex justify-between">
      <Link href="/">
        <a>
          <button type="button" className="z-10 cursor-pointer flex h-max" aria-label="Shko tek fillimi i faqes">
            {logo}
          </button>
        </a>
      </Link>
      <LightKey />

      {!onShop && (
        <div className="z-10 flex gap-4 h-max pl-4 relative flex items-center">
          {!user?.UserId ? (
            <Link href="/hyr">
              <a>
                <button type="button" className="w-[60px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="mr-2"
                    viewBox="0 0 24 24"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                  </svg>
                  <span className="font-small">HYR</span>
                </button>
              </a>
            </Link>
          ) : (
            <Dropdown
              button={
                <div className="flex h-full relative top-0.5 cursor-pointer flex-col items-center transition-all text-white-800 dark:text-gray-800 hover:text-secondary-800 dark:hover:text-secondary-800 fill-white-800 dark:fill-gray-800 hover:fill-secondary-800 dark:hover:fill-secondary-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256">
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                  <span className="text-sm leading-none">Llogaria</span>
                </div>
              }
            >
              <div className="w-full flex flex-col gap-1">
                {user?.RoleId === database.roles.AffiliateSeller && (
                  <li className="cursor-pointer">
                    <Link href="/profili">
                      <a>
                        <button type="button">Profili</button>
                      </a>
                    </Link>
                  </li>
                )}
                <li
                  className="flex gap-0.5 cursor-pointer transition-all items-center hover:text-secondary-800"
                  onClick={() => fireReduxAction(LOGOUT)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <polyline
                      points="174 86 216 128 174 170"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></polyline>
                    <line
                      x1="104"
                      y1="128"
                      x2="216"
                      y2="128"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <path
                      d="M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                  </svg>
                  <span>Dil</span>
                </li>
              </div>
            </Dropdown>
          )}
          <Link href="/gaming/aksesore/karrige-gaming-zyre">
            <a>
              <button type="button" className="cursor-pointer font-small shop-btn cursor-pointer mt-1">
                BLEJ
              </button>
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

export const logo = (
  <img
    src="https://api.menaxhimbiznesi.com/api/File/Retrieve?file=logo.svg"
    alt="Logo e Eeagle Zone Gaming Albania"
    height="100"
    width="87.333333377"
    className="md:h-[100px] h-[70px] md:w-[87.333333377px] w-[61.1333333325px] cursor-pointer"
  />
);

const mapToProps = ({ user }) => ({ user });
export default connect(mapToProps)(Header);
