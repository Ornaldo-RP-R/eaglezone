import { Link } from "wouter-preact";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./login.scss";
import { useLoadingForDyanmicRoute } from "../../components/staticComponents.js";
import { lazy } from "preact/compat";
import useWindowSize from "../../hooks/useWindowSize";

const LoginCarousel = lazy(() => import("./LoginCarousel"));

export function Login(props) {
  const { shouldRegister, isAffiliateSeller } = props;
  const { minTablet } = useWindowSize();
  useLoadingForDyanmicRoute();

  return (
    <div className="app h-full z-0 relative">
      <div className="flex w-full h-full">
        <div className="flex flex-col left-0 top-0 lg:w-1/2 w-full h-full xxl:px-8 px-4 opacity-6 bg-gray-900 dark:bg-white-900 overflow-auto">
          <Link href="/">
            <a>
              <button
                className="flex items-center h-max w-max cursor-pointer xxl:mt-8 md:mt-6 mt-4"
                type="button"
                aria-label="Shko tek fillimi i faqes"
              >
                <img
                  src="https://api.menaxhimbiznesi.com/api/File/Retrieve?file=logo.svg"
                  alt="Logo e Eeagle Zone Gaming Albania"
                  height="100"
                  width="100"
                  className="md:h-[100px] md:w-[100px] h-[70px] w-[70px]"
                />
              </button>
            </a>
          </Link>
          {shouldRegister ? <SignUpForm isAffiliateSeller={isAffiliateSeller} /> : <LoginForm />}
          <div className="xxl:mb-8 md:mb-6 mb-4 flex w-full" />
        </div>
        <div className="hidden lg:block w-1/2 h-full pt-4 bg-white-900 dark:bg-gray-900">
          {!minTablet && <LoginCarousel />}
        </div>
      </div>
    </div>
  );
}

export default Login;
