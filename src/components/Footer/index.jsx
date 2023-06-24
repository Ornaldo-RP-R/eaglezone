import React from "preact/compat";
import messenger from "../../assets/images/messenger";
import gmail from "../../assets/images/gmail";
import instagram from "../../assets/images/instagram";
import "./index.scss";
import EmailLink from "../../components/EmailLink";
import whatsapp from "../../assets/images/whatsapp";
import WhatsappLink from "../../components/WhatsappLink";
import { email, instagramName, phone } from "../../helpers";
import InstagramLink from "../InstagramLink";
import MessengerLink from "../MessengerLink";
import useOnScreen from "../../hooks/useOnScreen";
import { useRef } from "preact/hooks";

const Footer = () => {
  const ref = useRef();
  const { mountedAndShowed } = useOnScreen(ref);
  return (
    <footer ref={ref} class={`app__footer relative p-4 ${mountedAndShowed ? "is-visible" : ""}`}>
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <div className="grid social-grid relative sm:top-[-10px] top-[-5px] lg:gap-8 md:gap-4 gap-x-4 sm:gap-y-1 gap-y-5 lg:py-2 mx-auto">
        <InstagramLink instagramName={instagramName}>
          <Social
            type="instagram"
            Icon={instagram}
            title="INSTAGRAM"
            className="is__instagram description lg:h-[30px] h-[28px]"
            description="( eagle_zone_gaming )"
          />
        </InstagramLink>

        <WhatsappLink phone={phone} message={`Hello `}>
          <Social Icon={whatsapp} type="whatsapp" title="WHATSAPP" description="( +355 67 53 86 361 )" />
        </WhatsappLink>
        <MessengerLink recipientId="107440865621851" message={`Hello `}>
          <Social
            Icon={messenger}
            type="messenger"
            title="MESSENGER"
            description="( Eagle Zone Albania )"
            className="lg:h-[30px] h-[28px] lg:min-h-[30px] min-h-[28px]"
          />
        </MessengerLink>

        <EmailLink
          email={email}
          subject="Having%20question&amp"
          body="To%20Eagle%20Zone%20Staff,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20have%20some%20questions.%0D%0A%5BTELL%20US%20ABOUT%20YOUR%20REQUEST%20HERE%5D%0D%0A%0D%0AThanks%20for%20your%20help.%20Looking%20forward%20to%20hearing%20back%20from%20you%20soon.%0D%0A%0D%0ABest%20regards,%0D%0A%5BFill%20YOUR%20INFO%20HERE%20(name,email,number%20etc...)%5D"
        >
          <Social Icon={gmail} type="gmail" title="GMAIL" description="( eaglezoneal@gmail.com )" />
        </EmailLink>
      </div>
      <img
        src="https://ttatente.sirv.com/logo.svg"
        alt="Logo e Eeagle Zone Gaming Albania"
        className="lg:h-[170px] sm:h-[150px] h-[120px] logo sm:top-[-1px] top-[15px]  left-[5px] absolute"
      />
      <img
        src="https://ttatente.sirv.com/logo.svg"
        alt="Logo e Eeagle Zone Gaming Albania"
        className="lg:h-[170px] sm:h-[150px] h-[120px] sm:top-[-26px] top-[-1px] logo is-right right-[5px] absolute"
      />
      <span className=" bg-primary-500 absolute w-[20px] h-full right-0" />
    </footer>
  );
};

export const Social = (props) => {
  const { href, Icon, className, title, description, type } = props;
  return (
    <div className="flex flex-col items-center gap-[4px] social m-auto h-auto overflow-visible">
      <div
        href={href}
        className={`social__circle is--${type} lg:w-[55px] lg:h-[55px] w-[50px] h-[50px] lg:min-w-[55px] lg:max-h-[55px] min-w-[50px] max-h-[50px] lg:max-w-[55px] lg:min-h-[55px] max-w-[50px] min-h-[50px] overflow-visible`}
      >
        <Icon className={`text-primary-50 ${className || "lg:w-[30px] w-[28px] h-auto"}`} />
      </div>
      {(title || description) && (
        <span className="font-small sm:flex hidden flex-col items-center px-1">
          <span className="font-bold">{title}</span>
          <span className="description text-center xl:flex hidden">{description}</span>
        </span>
      )}
    </div>
  );
};

export default Footer;
