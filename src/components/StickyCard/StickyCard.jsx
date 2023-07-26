import { connect } from "redux-zero/preact";
import { Link, useRoute } from "wouter";

const StickyCard = (props) => {
  const { cart } = props;
  const [match] = useRoute("/checkout");

  return (
    !!cart?.length &&
    !match && (
      <Link href="/checkout">
        <div className="fixed bottom-[16px] right-[16px] cursor-pointer w-max w-full z-50">
          <div className="relative bg-gray-900 dark:bg-white-900 flex flex-col items-center p-3 pt-2 rounded-full border hover:scale-105 shadow-sm hover:shadow-primary-600 transition-all border-primary-900 gap-0.5 w-max">
            <div className="relative">
              <h6 className="absolute top-0 leading-[22px] left-[3px] flex gap-[0.5px] text-primary-700 flex items-center justify-center">
                {new Array(cart?.length).fill("").map((_, i) => (
                  <span key={i}>.</span>
                ))}
              </h6>
              {cartIcon}
            </div>
            <p className="text-xs leading-none">Shporta</p>
          </div>
        </div>
      </Link>
    )
  );
};

const cartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" height="38" viewBox="0 0 375 375">
    <defs>
      <clipPath id="a">
        <path d="M346.3 45.2h28.4V66h-28.4Zm0 0" />
      </clipPath>
      <clipPath id="b">
        <path d="M121 305h47.8v48.8H121Zm0 0" />
      </clipPath>
      <clipPath id="c">
        <path d="M259 305h48.2v48.8h-48.1Zm0 0" />
      </clipPath>
    </defs>
    <path
      fill="#4e5257"
      d="M122 301.1c0 13.3-10.7 24-23.8 24a23.9 23.9 0 0 1-23.7-24c0-13.2 10.6-24 23.7-24a23.9 23.9 0 0 1 23.8 24"
    />
    <path
      fill="#cdd5d6"
      d="M111.5 301.1c0 7.5-6 13.5-13.3 13.5-7.3 0-13.2-6-13.2-13.5 0-7.4 5.9-13.4 13.2-13.4 7.4 0 13.3 6 13.3 13.4"
    />
    <path fill="#73767d" d="M107 301.1c0 5-4 9-8.8 9-4.8 0-8.8-4-8.8-9 0-4.9 4-8.9 8.8-8.9 4.9 0 8.8 4 8.8 9" />
    <path
      fill="#4e5257"
      d="M260.3 301.1c0 13.3-10.6 24-23.7 24a23.9 23.9 0 0 1-23.8-24c0-13.2 10.6-24 23.8-24a23.9 23.9 0 0 1 23.7 24"
    />
    <path
      fill="#cdd5d6"
      d="M249.8 301.1c0 7.5-6 13.5-13.2 13.5-7.4 0-13.3-6-13.3-13.5 0-7.4 6-13.4 13.3-13.4 7.3 0 13.2 6 13.2 13.4"
    />
    <path fill="#73767d" d="M245.3 301.1c0 5-3.9 9-8.7 9-5 0-8.8-4-8.8-9 0-4.9 3.9-8.9 8.8-8.9 4.8 0 8.7 4 8.7 9" />
    <path
      fill="#b84227"
      d="M346.8 58.2s-1 .3-.9 2.4c.2 2.1 2 4.7 4.3 5.3 2.2.6 4.8 1.5 6.2.8 1.5-.8 2.3-2 2.3-2l-6.4-8.1-5.5 1.6M298.4 35.5s-1 .3-.9 2.4c.2 2.1 2.1 4.8 4.3 5.4 2.3.6 4.9 1.5 6.3.7 1.4-.7 2.3-2 2.3-2l-6.4-8.1-5.6 1.6"
    />
    <path
      fill="#c2c3c4"
      d="M289 170a3 3 0 0 1-1.9-.5l-35.7-26c-1.7-1.2-2.2-3.8-1.2-5.8 1-2 3.2-2.5 4.9-1.3l35.7 26c1.7 1.2 2.2 3.7 1.2 5.7-.7 1.3-1.8 2-3 2"
    />
    <path
      fill="#c2c3c4"
      d="m259.5 217-5.3-1a2 2 0 0 1-1.6-2.4l24.6-130.5a2 2 0 0 1 2.4-1.6l5.3 1a2 2 0 0 1 1.6 2.4l-24.6 130.5a2 2 0 0 1-2.4 1.6"
    />
    <path
      fill="#c2c3c4"
      d="M299 98.6c-.6 0-1.3-.3-2-.7l-37-25.1a3.6 3.6 0 0 1-1-5.1 3.8 3.8 0 0 1 5.2-1l37.2 25.1a3.6 3.6 0 0 1 1 5.2c-.8 1-2.1 1.6-3.4 1.6"
    />
    <path fill="#cb2a4b" d="m316.7 33.9-1.8 2.9 44.4 19.8 5-6.6-41.2-19-6.4 2.9" />
    <path
      fill="#dcdbda"
      d="M41 131.2c-.8 0-1.5-.3-2-.7l-35.8-26c-1.8-1.3-2.3-4-1.3-6a3.7 3.7 0 0 1 3.3-2.2c.7 0 1.4.2 2 .7l35.7 26c1.8 1.2 2.4 4 1.3 6-.7 1.4-2 2.2-3.3 2.2"
    />
    <path
      fill="#dcdbda"
      d="M5.2 96a4 4 0 0 0-3.5 2.3c-1.2 2.2-.6 5 1.3 6.5l35.8 26c.6.4 1.4.7 2.1.7a4 4 0 0 0 3.5-2.3c1.2-2.2.6-5.1-1.3-6.5l-35.8-26c-.6-.4-1.4-.7-2.1-.7Zm0 .6c.6 0 1.2.2 1.8.6l35.8 26c1.6 1.2 2.1 3.7 1.1 5.7-.6 1.3-1.8 2-3 2a3 3 0 0 1-1.8-.6l-35.8-26c-1.6-1.2-2.1-3.8-1.1-5.7.6-1.3 1.8-2 3-2M46.6 179.7c-.7 0-1.4-.2-2-.6l-33-22.8a4.3 4.3 0 0 1-1.1-5.5c.6-1.2 1.8-2 3-2 .7 0 1.4.3 2 .7l33 22.7a4.3 4.3 0 0 1 1.1 5.5c-.6 1.3-1.8 2-3 2"
    />
    <path
      fill="#dcdbda"
      d="M13.6 148.5a4 4 0 0 0-3.5 2.1c-1 2-.5 4.8 1.3 6l33 22.8c.7.4 1.4.7 2.2.7a4 4 0 0 0 3.4-2.2c1-2 .5-4.7-1.3-6l-33-22.7c-.6-.5-1.4-.7-2.1-.7Zm0 .7a3 3 0 0 1 1.7.6l33 22.8c1.5 1 2 3.3 1 5a3.2 3.2 0 0 1-2.7 1.7 3 3 0 0 1-1.7-.5l-33-22.8c-1.6-1-2-3.3-1.1-5a3.2 3.2 0 0 1 2.8-1.8M56.9 229.5c-.8 0-1.6-.2-2.3-.7l-40.2-29.6c-2-1.5-2.6-4.6-1.4-7a4.2 4.2 0 0 1 3.7-2.4c.8 0 1.6.2 2.3.7l40.2 29.6c2 1.5 2.6 4.6 1.4 7a4.2 4.2 0 0 1-3.7 2.4"
    />
    <path
      fill="#dcdbda"
      d="M16.7 189.4c-1.6 0-3.2 1-4 2.7-1.3 2.5-.6 5.8 1.5 7.4l40.2 29.6c.7.5 1.6.8 2.5.8 1.6 0 3.2-1 4-2.7 1.3-2.5.6-5.8-1.5-7.4l-40.2-29.6c-.7-.5-1.6-.8-2.5-.8Zm0 .7c.7 0 1.4.3 2 .7L59 220.4c1.8 1.4 2.4 4.3 1.3 6.5-.8 1.5-2 2.3-3.4 2.3-.7 0-1.4-.3-2-.7l-40.3-29.6c-1.8-1.4-2.4-4.3-1.3-6.5.8-1.5 2-2.3 3.4-2.3M300.7 100.5c-1 0-2.1-.5-2.8-1.5-1-1.5-.6-3.6 1-4.7L350 58.9a3.4 3.4 0 0 1 4.8.9c1 1.5.6 3.6-1 4.7L302.7 100c-.5.4-1.2.6-1.9.6"
    />
    <path
      fill="#dcdbda"
      d="M352 58c-.7 0-1.4.2-2 .6l-51.3 35.5a3.7 3.7 0 0 0-1 5.1 3.7 3.7 0 0 0 5.1 1l51.3-35.5a3.7 3.7 0 0 0 1-5.1c-.7-1-1.8-1.6-3-1.6Zm0 .5a3.2 3.2 0 0 1 1.8 5.7l-51.3 35.5a3 3 0 0 1-4.3-.8c-1-1.4-.6-3.4.8-4.4l51.3-35.4a3 3 0 0 1 1.8-.6M28.4 208.2c-1.3 0-2.4-1-2.4-2.2l-5.3-87.2c0-1.3 1-2.5 2.3-2.5l5.3-.4h.2c1.2 0 2.3 1 2.4 2.3l5.2 87.1c0 1.4-1 2.5-2.2 2.6l-5.4.3h-.1"
    />
    <path
      fill="#dcdbda"
      d="M28.5 115.5h-.2l-5.4.4a2.8 2.8 0 0 0-2.6 3l5.3 87a2.8 2.8 0 0 0 3 2.7l5.3-.3c1.5-.1 2.7-1.4 2.6-3l-5.3-87.1c0-1.5-1.3-2.7-2.7-2.7Zm0 .8c1 0 2 .8 2 2l5.2 87a2 2 0 0 1-1.9 2.2l-5.3.3h-.1c-1.1 0-2-.8-2-1.9L21 118.8c0-1.1.8-2.1 1.9-2.2l5.4-.3"
    />
    <path
      fill="#cb2a4b"
      d="M299.7 34.2 315.5 23s3.8-1.5 8 1.5 2.6 6.5 2.6 6.5l-16.6 12.3s0-3.4-3.4-5.8-7.7-2-7.7-2l1.3-1.3"
    />
    <g clip-path="url(#a)">
      <path
        fill="#cb2a4b"
        d="M348 57 364 45.5s3.8-1.4 8 1.6c4.1 3 2.5 6.5 2.5 6.5L358 65.9s0-3.3-3.5-5.8c-3.3-2.4-7.6-1.9-7.6-1.9L348 57"
      />
    </g>
    <g clip-path="url(#b)">
      <path
        fill="#4e5257"
        d="M168.7 329.8c0 13.2-10.6 24-23.7 24a23.9 23.9 0 0 1-23.7-24c0-13.3 10.6-24 23.7-24a23.9 23.9 0 0 1 23.7 24"
      />
    </g>
    <path
      fill="#cdd5d6"
      d="M158.3 329.8c0 7.4-6 13.4-13.3 13.4-7.3 0-13.3-6-13.3-13.4 0-7.5 6-13.5 13.3-13.5 7.3 0 13.3 6 13.3 13.5"
    />
    <path fill="#73767d" d="M153.8 329.8c0 4.9-4 8.9-8.8 8.9-4.8 0-8.8-4-8.8-9 0-4.9 4-8.9 8.8-8.9 4.9 0 8.8 4 8.8 9" />
    <g clip-path="url(#c)">
      <path
        fill="#4e5257"
        d="M307 329.8c0 13.2-10.6 24-23.7 24a23.9 23.9 0 0 1-23.7-24c0-13.3 10.6-24 23.7-24a23.9 23.9 0 0 1 23.8 24"
      />
    </g>
    <path
      fill="#cdd5d6"
      d="M296.6 329.8c0 7.4-6 13.4-13.3 13.4-7.3 0-13.2-6-13.2-13.4 0-7.5 5.9-13.5 13.2-13.5 7.4 0 13.3 6 13.3 13.5"
    />
    <path fill="#73767d" d="M292.1 329.8c0 4.9-4 8.9-8.8 8.9-4.8 0-8.8-4-8.8-9 0-4.9 4-8.9 8.8-8.9 4.9 0 8.8 4 8.8 9" />
    <path
      fill="#9a9b9f"
      d="m308.5 40.9-25.1 17.4L308.5 41ZM264.4 71h.2-.2Zm-20.1 118.7 19.4-118.2Zm33.9 38.6v.1-.1Zm-1.4 4Zm.7-.7Zm-2.2 1.3h-.3.3Zm.5-.2-.3.1h.3Zm.4-.1Zm.5-.3Zm-2.3.7Zm-2.6-.8-37.4-26.9 37.4 26.9c.6.4 1.4.7 2 .7h.1c-.7 0-1.5-.3-2-.7Zm-44-24.8Zm22 27.3.2-.2-.2.2Zm-.4.3Zm1-1c1.4-1.5 1.1-3.8-.7-5l-21.9-15.7 22 15.6c1.7 1.3 2 3.6.7 5.2Zm-1.4 1.1h.2-.2Zm8.3 9.3-3.9-4 3.9 4Zm6.6 6.8Zm3 3.2-1.1-1.2 1.2 1.2Zm-16.3-17-2-2 2 2Zm21.3 23.4.3.5-.3-.5-1.1-1.2Zm1.2 2.3Zm.6 4.1Zm-2.3 6.2c-2.9 4-8 6.3-13.6 6.3h-5.6 5.6c5.6 0 10.7-2.4 13.6-6.3ZM114 279.7h104Zm-73.8 0h39.4Zm0-5.4h217.7H40.1c-1.4 0-2.5.6-3 1.6.5-1 1.6-1.6 3-1.6Zm225-2.9Zm1.3-1.8-.1.2v-.2Zm-4.2-9-28-29 28 29Zm-53.8-52 10.1 7.2Zm-18.7-.6h17.6Zm30 22.4c-.2-.6-.6-1-1.1-1.5l-15-10.7 15 10.7c.5.4 1 1 1.2 1.5Zm-1 4.3.2-.2-.3.2Zm-.5.3Zm-.4.1Zm-.5.2Zm-.5 0Zm2.2-.9Zm-2.8 1Zm-39-26.8L196 222Zm-21.1-.6h20Zm28.9 26.7.2-.2-.2.2Zm-.4.3.2-.2-.2.2Zm-.4.1Zm-.5.2Zm-.5 0Zm3.3-3.9c-.1-1-.6-1.8-1.5-2.5l-18.1-13 18 13c1 .7 1.5 1.6 1.6 2.5Zm-4 4Zm-38.8-26.8 14.8 10.6Zm-20.1-.6h19Zm28.9 26.7.3-.2-.3.2Zm-.4.3.3-.2-.3.2Zm-.4.1Zm-.5.2h.3-.3Zm-.5 0Zm2.5-1.2c1.4-1.6 1-3.9-.7-5.2l-22-15.8 22 15.8c1.8 1.3 2 3.6.7 5.2Zm-3.1 1.3Zm-39-26.8 19.6 14Zm-21.5-.6H110Zm30 22.4c-.2-.6-.6-1-1.1-1.5l-11.4-8.1 11.4 8.1c.5.4 1 1 1.2 1.5Zm-1 4.3.2-.2-.3.2Zm-.5.3.3-.2-.3.2Zm-.4.1Zm-.5.2Zm-.5 0Zm2.2-.9Zm-2.8 1Zm-39-26.8 22 15.7Zm-41.8-.6a25 25 0 0 1-24.8-25.2L2 111l8.4 72a25 25 0 0 0 24.8 25h40.8ZM1.3 98Zm255.1-22.8.1.2v-.2Zm-.2-.5Zm-9.8 64 10.2-62.2Zm-8.3 50 7.4-44.8ZM234 205Zm36.4 54.1ZM267 267Zm-1.1-3.7.2.3-.2-.3Zm-46.4-46.7Zm-12-8.6Zm-26.7-6.3h24.2Zm-4.4 6.3Zm-29.2-6.3h25Zm-4.4 6.3Zm-28-6.3h25.4Zm-4.5 6.3Zm-29.6-6.3h27.6Zm-4.4 6.3Zm-30-6.3h28Zm-11 0h5-5Zm-5.6-.8Zm-11-9.5Zm.8 1.5-.4-.6.4.6Zm1.1 1.6Zm1.5 1.7ZM12.9 152l3.8 30.8Zm21.3-52.7-25 3Zm35-4-29 3.3Zm35.7-4.2-30 3.4Zm38.8-4.6L111 90.3Zm38.2-4.4-32 3.7Zm36.4-4.3L188 81.4Zm35.6-4.1L224.5 77l29.4-3.4Zm1.5.3.2.1-.2-.1Zm-.5-.2Zm-.6-.1h.3-.3Zm1.5.6ZM244.5 138l-26.6.7 6.6-61 29.5-3.5h.2a1.9 1.9 0 0 1 1.8 2.2l-10.2 62a3 3 0 0 0-1.3-.4Zm-10.9 58.5a4 4 0 0 0-2.3-.7c-.4 0-.9 0-1.3.2-1.5.4-2.9 1.3-4.2 2.1l-1.2.8c-1.1.6-2.1 1.4-3 2.2h-10.3l6-56.2 27.3-.8h.3l-7.3 44.4c-.5 3.1-2 5.9-4 8Zm-53.5 4.6c-.5-.3-1-.5-1.6-.6L183 146l28.2-.8-6 56Zm-33.6 0L148 147l28.8-.9-4.4 55Zm-33.6-53 29-1-1.6 54h-25.7Zm-35 1.2 28.9-1 1.7 52.8H80.6Zm-3.2 52.4Zm-31.4-51.2 28.8-1 2.7 51.6H46.4ZM45 201l-3-50.6Zm0 .6Zm-3 0Zm-3.1-51 3 50.4Zm-26.1-.2Zm23-50.8 2.7 44.8Zm0-.6Zm3-.3Zm33 44.5-23.2.9-5.5.2-2.8-45.2 29-3.4Zm-1-47.7 2.5 47.7Zm0-.6Zm35.9 47.2-29 1-2.7-48 30-3.6Zm2.9-51.7Zm1.7 51.5-1.7-51Zm30.9-1-13.8.5-15.6.5-1.7-51.1 32.7-3.8Zm35.1-1-29 .9 1.6-54.5 32-3.8Zm9.3-58.5Zm-4.6 58.3 4.6-57.7Zm29.9-.9-28.4.9 4.6-57.9 30.3-3.5Zm8-60.7-6.5 60.7Zm0-.6Zm24.7 61.9-26.7.7 26.7-.7ZM221 201.7h-9Zm-8.4-56.7-6 56ZM179 200.8Zm-.4-.1Zm1.2.4h-.1.1Zm-36.3-54-1.6 53.9Zm-32 1 1.7 51.7ZM110 201Zm-1.7-52.7 1.7 52.5Zm-29.2 52.5-2.8-51.4Zm0 .2Zm-2.8-.1Zm-2.8-51.4 2.8 51.2Zm-39.6 0h-2.5 2.5Zm-21-2Zm17.2 2.1Zm-16.9.9Zm28.3-6L39 104.6Zm14.7 1Zm15.6-.6-11.5.4 11.5-.4Zm1.5 0Zm33.4-1.1Zm4.5-.2Zm30.9-1-13.7.5-15.7.5 15.7-.5 13.7-.5Zm6-.1Zm29-1-.9.1h1Zm6.1-.1 7.3-.2-7.3.2Zm28.4-.9-20.8.7 20.8-.7Zm1.5 0Zm8.7 61.3Zm.6-.6Zm5.3-3.4Zm4.9-1.1h.1-.1Zm-.7-.2h.1Zm-.7 0h.2-.2Zm-.5 0h.1-.1Zm2.5.5Zm-199-97 2.7 44.7a552.4 552.4 0 0 0-24.2 1.3l-5.1-41.3c0-1 .7-1.7 1.7-1.8Zm-17 82.9-3.8-31c2-.2 10.8-.6 23.9-1.1l3 50.4h-5c-10 0-18-8.2-18-18.3ZM256.6 75.9v-.2.2ZM3.6 96.6l256.9-30h.3-.3l-257 30Zm302.8-60.7Zm.5-.1Zm-1.5.5-19.1 13.2Zm2.4-.4h-.2.2Zm.5.2Zm-1.3-.3Zm1.8.7-.1-.1.1.1Zm1 2c0-.5-.2-1-.5-1.5.3.5.4 1 .4 1.6Zm0-1.8a3.3 3.3 0 0 0-4.7-.9l-42.8 29.6-.6.7a3.7 3.7 0 0 0-1.3-.1L3.4 96a3.7 3.7 0 0 0-3.2 3.7L10 183a25.6 25.6 0 0 0 25.4 25.7H77l36.5 26.2a4.5 4.5 0 0 0 2.7.8c1.3 0 2.5-.5 3.3-1.4.6-.8 1-1.7.8-2.7-.1-1-.7-2-1.6-2.7l-28.2-20.2h20.5l36.5 26.2a4.5 4.5 0 0 0 2.7.8c1.3 0 2.5-.5 3.3-1.4.6-.8 1-1.7.8-2.7-.1-1-.7-2-1.6-2.7l-28.2-20.2h19l36.5 26.2a4.6 4.6 0 0 0 2.7.8c1.3 0 2.5-.5 3.2-1.4.7-.8 1-1.7 1-2.7-.2-1-.8-2-1.7-2.7l-28.3-20.2H177l36.5 26.2a4.6 4.6 0 0 0 2.7.8c1.3 0 2.5-.5 3.3-1.4.6-.8 1-1.7.8-2.7-.1-1-.7-2-1.6-2.7l-28.2-20.2H208l10.6 7.6.6 1h.1v.2l42.4 43.6c.7 1 1.8 1.6 3 1.9l.8.7a5.7 5.7 0 0 1-.3 6.7 9.2 9.2 0 0 1-7.5 3.4H40.1c-2.1 0-3.9 1.5-3.9 3.3 0 1.8 1.8 3.2 4 3.2h38.7a23.3 23.3 0 0 0-6 11l-.4 2-.2 3.2c0 .9.3 3.1-.2 3.8 0 0 .9-1 3.2-4.5 1.9-2.8 4.6-5.2 7.6-7.2l7.7 13.4c1 1.8 3.4 2.4 5.2 1.4l5.1-3c1.8-1 2.5-3.4 1.4-5.2l-6.8-11.8c6.6-1.6 13.5-2 20.2-2.6l-.8-.5h102.3a23.3 23.3 0 0 0-6 11 66.7 66.7 0 0 0-.5 5.2c-.2.9.2 3.1-.3 3.8 0 0 .9-1 3.2-4.5 1.9-2.8 4.6-5.2 7.7-7.2L229 302c1 1.8 3.3 2.4 5.1 1.4l5.2-3c1.8-1 2.4-3.4 1.3-5.2l-6.8-11.8c6.6-1.6 13.5-2 20.2-2.6l-.8-.5h4.6c5.8 0 11-2.4 14-6.4 3.1-4.1 3.3-9 .6-13.3l-.1-.1-1.4-1.5c0-.6-.2-1.3-.6-1.8v-.1h-.1v-.1l-21-21.6a4 4 0 0 0 1.4-1c.7-.9 1-1.8.9-2.8-.1-1-.7-2-1.7-2.7l-22.3-16c-.7-1.3-.7-3.4-.1-4.7a22 22 0 0 0 6.8-2.7l37.5 26.9a4.6 4.6 0 0 0 6-.6c.6-.7 1-1.7.8-2.7 0-1-.7-2-1.6-2.7l-36.6-26.2c2.3-3 3.9-6.5 4.5-10.4l19.5-118.1c.6 0 1.3-.2 1.8-.6l42.8-29.6c1.5-1.1 1.9-3.2.8-4.7"
    />
    <path
      fill="#dcdbda"
      d="M141.2 332.4Zm.8-.2Zm-1.5.2a4.4 4.4 0 0 0 .2 0h-.2Zm-.8-.1Zm-.6-.3Zm-.7-.4Zm-.5-.4Zm-.5-.7Zm-18.5-1.7 3.2-4.5-3.2 4.5Zm1.6-11.7Zm.6-1.5Zm.5-1.2Zm.7-1.1Zm.8-1.3Zm.6-1Zm.8-1Zm-4.5 8.5Zm5.4-9.4Zm1.8-1.6Zm1-.7Zm1-.6Zm1-.6Zm1-.5Zm1-.4Zm1.3-.5Zm1-.3Zm1.1-.2Zm1.4-.3Zm1-.1Zm1.2-.1Zm1.4 0Zm-14.4 5.1Zm15.4-5.2h-.8.8Zm8.6 1 .4.2-.4-.1Zm-1.4-.2h.6-.6Zm-1.3-.3.6.1h-.6Zm-1.3-.2.6.1h-.6Zm-1.3-.1Zm-1.3-.1h.6-.6Zm-1.3 0h.6-.6Zm9.8.9c-3.7-1-7.3-1.6-10.7-1.6a21.6 21.6 0 0 0-22.6 19v.2a62.1 62.1 0 0 0-.3 4.4v2.4l.9.6 3.1-4.5c1.7-2.4 4-4.7 7-6.7l7.4 12.9a4.3 4.3 0 0 0 6 1.6l5.1-3c2-1.2 2.8-3.9 1.6-6l-6.5-11.1c5.5-1.3 11.1-1.7 16.6-2.2l2.8-.2 1.8-.2-1.5-.9a44.3 44.3 0 0 0-10.7-4.7M279.5 332.4Zm.8-.2Zm-1.5.2a4.4 4.4 0 0 0 .2 0h-.2Zm-.8-.1Zm-.6-.3Zm-.7-.4Zm-.5-.4Zm-.5-.7Zm-15.9-5.4.6-.8-.6.8Zm-1-8Zm.6-1.5Zm.6-1.2Zm.6-1.1Zm.8-1.3Zm.7-1Zm.8-1Zm-4.6 8.5Zm5.5-9.4Zm1.7-1.6Zm1-.7Zm1-.6Zm1-.6Zm1-.5Zm1-.4Zm1.3-.5Zm1-.3Zm1.2-.2Zm1.3-.3Zm1-.1Zm1.3-.1Zm1.3 0Zm-14.3 5.1Zm15.4-5.2h-.9H280Zm8.5 1 .5.2-.5-.1Zm-1.3-.2h.5-.5Zm-1.4-.3.6.1h-.6Zm-1.3-.2.6.1h-.6Zm-1.3-.1h.6-.6Zm-1.3-.1h.6-.6Zm-1.3 0h.6-.6Zm20.5 5.6a44.3 44.3 0 0 0-21.4-6.3 21.6 21.6 0 0 0-22.6 19v.2l-.3 3.3v1.1c0 .7.2 2 0 2.4l.9.6 3.1-4.5c1.7-2.4 4-4.7 7-6.7l7.5 12.9a4.3 4.3 0 0 0 5.9 1.6l5.1-3c2.1-1.2 2.8-3.9 1.6-6l-6.4-11.1c5.4-1.3 11-1.7 16.5-2.2l2.9-.2 1.7-.2-1.5-.9M303.8 97.6 293.4 161l10.4-63.3ZM41 125.8c-.2.4-.3.9-.3 1.3l3.6 31.3-3.6-31.3c0-.4 0-.9.3-1.3Zm15.2 100.6Zm-9.3-94.3 5.1 41.4-5.1-41.4Zm27.1-5.3-25 2.9Zm35-4.1L80 126Zm35.8-4.2-30 3.5Zm38.8-4.5-32.7 3.8Zm111.6-12.6.2.2-.2-.2Zm-.4-.2Zm-.6 0Zm1.5.6.1.1-.1-.1Zm.6.8v.2-.2Zm-.3-.4.2.1-.2-.1ZM58 217.6Zm-5.3-38.2 3.9 30.9Zm25.8-53.2Zm33.1 44.6-23.2.8-5.6.2-2.7-45.2 29-3.4Zm1.7-48.6Zm2.6 48.4-2.6-47.9Zm30.6-1-29.1 1-2.6-48 30-3.5Zm-.2-50.7 1.7 50.7Zm0-.6Zm3-.3Zm1.8 51.5-1.7-51Zm30.9-1-13.8.4-15.6.5-1.7-51 32.7-3.9Zm3-54.1-1.5 54Zm0-.6Zm99.4 51.6h-.1l-26.5.8 6.5-61 29.5-3.5a2 2 0 0 1 1.7.6c.3.5.5 1 .4 1.6l-10.2 61.9a3 3 0 0 0-1.3-.4Zm-8 55.3ZM78.4 172l-.7-11.1Zm68.2-.9-5 .2 5-.2ZM182 170l-13.6.4-12.3.4 12.3-.4 13.6-.4Zm1.5 0Zm33.7-2.6-29 1 1.6-54.6 32-3.7Zm4.6-.1 4.6-57.8Zm30-1-28.5 1 4.6-58 30.3-3.5Zm1.5 0 6.4-60.6Zm31.1.6-26.7.8 26.7-.8Zm-27.2 5.4 27.4-.8h.3l-7.3 44.5a15 15 0 0 1-14.8 12.6h-11.6Zm-4.6.2-6 56Zm-29.8.9 28.3-.9-6 56h-26.7Zm-1.5 0-4.4 55.2Zm-5.2 26.9-2.3 28.3Zm-28.1-25.9 28.7-.8-4.4 55h-26Zm-4.6.2-1.6 54Zm-18.6-1Zm-7 .3h.2-.1Zm-5 1.7 29-1-1.5 54h-25.7Zm-4.5.1 1.7 52.9Zm-8.4-1.2Zm-11 .3h.2-.1Zm-11 1.9 28.9-1 1.7 52.9h-28Zm-1.6 0 2.8 51.9Zm-33 1.2 28.7-1 2.8 51.7H86.3Zm-4.6.2 3.1 50.5Zm74.1-4h.7-.7Zm-1.4 1.5.1 5Zm0-1.5Zm30.5-1Zm1.5 0Zm9.7-.3-4.8.1 4.8-.1Zm7-.2-4.7.1 4.7-.1Zm17-3.7Zm4.6-.1Zm20 2.5Zm9.9-3.4Zm1.5 0Zm-1.8 3.1-3 .1h3Zm1.5 0Zm-29.8.9h.5-.5Zm-1.5 0Zm-4.7.2h-2.6l-11.7.4 11.7-.4h2.6Zm68.3-2.2-.6.1-9.4.3-17.7.5 17.7-.5c3.3 0 6.4-.2 9.4-.3l.6-.1ZM57.1 210.2l-3.8-30.9 23.8-1.2 3.1 50.5h-5c-10 0-18-8.2-18-18.3Zm17-82.9 2.7 44.7a543.8 543.8 0 0 0-24.2 1.4L47.4 132c0-1 .8-1.8 1.7-1.9Zm222.4-24v-.1.2Zm4.9-9.3Zm.6.2h-.1Zm.5.4Zm-1.8-.6Zm2.7 1.5-.4-.6.4.6Zm0-1a3.7 3.7 0 0 0-3.1-1l-257 30a3.7 3.7 0 0 0-3.2 3.6v.1l9.7 83.1A25.6 25.6 0 0 0 75.2 236h187.6c10.9 0 20-8 21.9-18.8l19.6-119.5c.2-1.1-.1-2.3-1-3.1"
    />
    <path fill="#cb2a4b" d="m7 115.3 33.7 24.2 9 78.5-35.2-25.6L7 115.3" />
    <path
      fill="#dcdbda"
      d="m271 240.6 2.4 2.4-2.4-2.4Zm2.9 2.9 28.3 29.2Zm42.5 43.9-1.6-1.7a3 3 0 0 0-.5-1.7v-.1L271.8 240c-1.4-1.4-1.3-4.8-.1-6.3 1.4-2 4.7-3 6.5-4.8l.5-.5c.2-.4.2-.8.2-1.2 0-1.2 0-2.5-.8-3.4-.9-1-2.3-1.1-3.6-.8-1.8.5-3.6 2-5.2 2.9-1.8 1-3.4 2.4-4.6 4-3.1 4.1-3.3 9.2-.5 13.4v.1l42.4 43.8c.6.9 1.7 1.5 3 1.7l.8.9c1.5 2.3 1.4 5-.3 7.3a9.8 9.8 0 0 1-7.9 3.7H84.7c-.4-1-1-2-2-2.5l-43.2-25c-2-1-4.4-.1-5.2 2.2-1 2.4 0 5.2 2 6.3l43.2 25c.7.4 1.4.5 2.1.4.8 0 1.6-.5 2.2-1.1h218.5c5.6 0 10.7-2.3 13.6-6.2 3-3.9 3.1-8.6.5-12.6"
    />
  </svg>
);

const mapToProps = ({ cart }) => ({ cart: cart || [] });
export default connect(mapToProps)(StickyCard);