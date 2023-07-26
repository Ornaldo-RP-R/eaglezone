import { useState } from "preact/hooks";
import { Fragment } from "preact/compat";
import Picture from "../Picture/Picture";
import Section from "../../components/Section";
import Header from "../../components/Header";
import IntroductionChair from "../../components/IntroductionChair";
import "./index.scss";

const Introduction = () => {
  const [lampLoaded, setLampLoaded] = useState(false);
  return (
    <Section className="app__introduction z-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="martial-pillow-logo" version="1.0" viewBox="0 0 1438 641">
        <defs>
          <clipPath id="a">
            <path d="M10 9h452v430H10Zm0 0" />
          </clipPath>
        </defs>
        <g clip-path="url(#a)">
          <path
            fill="#cd6c14"
            fill-opacity=".4"
            d="m11 389 2 5 6 8 1 2c5 1 9 6 15 6l3-1 7 1c2 0 2 1 2 3v3l-5 17c0 1-2 4 0 5 3 1 3-2 4-4l9-14 7-9c3-3 6-6 10-6l2-1 5-2 12-5 3-1 2-1-2-1-5 2c0 1-1 1-2-1v-1c-1-2 0-2 1-2h2c1 0 2 0 1-2l1-1 5-2 8-4 1-1c2 0 2-1 3-2l2-2 11-4h2c2 0 10-4 10-7h5l3-1h2v1c-1 0-2 0 0 1h2l1-3c2-2 2 1 2 1l2-1 1-2 5-2c2 1 0 2 0 4l1-2 1-2 9-3h2l6-2c1-1 2-1 2 1 1 1 3 1 3-1 0-3 2-2 3-1h3l6-2c4 0 7-1 11-3l6-3 7-2h4c4-1 9-1 13-3h2l19-1h5l35-1c2 0 4-1 4-3l1-2c3 1 4-2 5-3 2-2 2-3 0-4l-4-1-11-2c-13-2-26-4-39-4l-33 3h-11l-32 5c-9 2-18 3-26 6l-10 4-16 5-5 1h-2v-2l4-6 19-32 3-2 6-11 1-5c-1 3-4 6-7 8-2 1-3 3-3 6l-4 7c-2 0-2 2-3 3-1 3 0 3 2 3l-6 5-2 2c1 2 0 2-2 3l-4 3c-2 1-2 2-1 4l1 2c1 1 0 2-1 2l-4-1-2-1c1 0 5-1 5-3l1-3c5-3 7-8 9-13 0-2 0-3 2-3l4-10 2-3c3-2 4-4 5-6l3-4 2-2v-4c0-2 1-2 2-2l1-2 5-9c1-1 1-3 3-3h3l-2 2h-2l1 3-2 2 2 1c3 0 7-4 6-7l7-10 1-4-3 1c-1 2-2 1-3 0-2-3-1-6 3-7 2-1 2-2 2-4v-3h3c3 0 3-2 3-5l2-5 2-4 1-2c-1-2 2-5 3-4 2 2 6 2 9 3 1-6 3-6 9-7l9-2-2 2h-3l5 1h5l-1-2h-3c6-2 13 0 19-3h1c1 0 3 0 4-2l2-1h7v-1l-2-2h-5c-2 0-4 0-5-2v-1c-2 1-5 1-6 3l-5 2c1-2 2-3 0-4l-2-1v-2h3l3 2c7 0 15-3 20-5l6-2h4l3 1 2-1 2-3c2 0 4-2 5-1l3 1 8-3 7-2 8-2h9l2-1 2-2 4 1h2l2 2v-1c1-2 2-3 5-4s6-2 8-6c3-4 7-8 12-10 3-1 5-2 6-4l1-2h-15l-35 4-39 6-26 4h-4v-1l9-15 1-3c3-3 6-6 7-10l6-10c1-4 3-9 6-12l5-10c2-4 6-6 5-10l1-2 2-2c5-9 10-20 12-30 0-1 1-4 3-4l3-2h5l3 1c0-2 2-1 3-1l6-3c2-1 3-2 4-1l2-1c0-2 1-2 1-1l3 1 4-2 2-2c2 2 3-1 4-1l3-1 2 1h3l2-3c2-1 3-2 5 0h6l3-1h3l4 1 3-1 15 1h3l4-1h-7l-2-1 2-1c3-2 12-4 16-4 2 0 3 1 3-1h2l11-2h8l5-1 8-2 8-2 8-1c6 0 11-4 16-7 2-1 3-3 2-5l-2-10-2-1h-2l-66 4-87 7c-10 0-20 2-29 3l-20 3-33 2c-5 0-8 0-13-2-1-1-3 0-4 1l-1 2 2 6c2 3 3 5 3 8s1 5 3 5l5 3c2 0 3 2 5 3 6 2 11 4 18 4 3 0 5 3 3 6l-1 3-7 13-2 2-4 6c-1 5-4 7-6 11l-6 8c-5 8-11 15-15 24-2 5-6 9-9 14l-8 13c-2 6-6 11-9 16-1 3-4 5-6 5h-26c-4 0-8 0-11-2h-2l-2 2 1 9 2 5c1 2 2 4 5 4l2 2 12 6c8 3 6 4 3 9l-26 48-8 17-20 35-13 25-4 8-4 7c-1 6-5 9-11 11l-17 7-7 2-16 4-11 2c-4 0-4 1-4 4v4Zm102-41 2-2h3l-7 7-1-2c0-3 0-3 3-3Zm47-79 2-3h1v1l-4 6h-1l-1-2c2 1 2-1 3-2Zm0 0"
          />
          <path
            fill="#da291c"
            d="m11 389 2 5 6 8 1 2c5 1 9 6 15 6l3-1 7 1c2 0 2 1 2 3v3l-5 17c0 1-2 4 0 5 3 1 3-2 4-4l9-14 7-9c3-3 6-6 10-6l2-1 5-2 12-5 3-1 2-1-2-1-5 2c0 1-1 1-2-1v-1c-1-2 0-2 1-2h2c1 0 2 0 1-2l1-1 5-2 8-4 1-1c2 0 2-1 3-2l2-2 11-4h2c2 0 10-4 10-7h5l3-1h2v1c-1 0-2 0 0 1h2l1-3c2-2 2 1 2 1l2-1 1-2 5-2c2 1 0 2 0 4l1-2 1-2 9-3h2l6-2c1-1 2-1 2 1 1 1 3 1 3-1 0-3 2-2 3-1h3l6-2c4 0 7-1 11-3l6-3 7-2h4c4-1 9-1 13-3h2l19-1h5l35-1c2 0 4-1 4-3l1-2c3 1 4-2 5-3 2-2 2-3 0-4l-4-1-11-2c-13-2-26-4-39-4l-33 3h-11l-32 5c-9 2-18 3-26 6l-10 4-16 5-5 1h-2v-2l4-6 19-32 3-2 6-11 1-5c-1 3-4 6-7 8-2 1-3 3-3 6l-4 7c-2 0-2 2-3 3-1 3 0 3 2 3l-6 5-2 2c1 2 0 2-2 3l-4 3c-2 1-2 2-1 4l1 2c1 1 0 2-1 2l-4-1-2-1c1 0 5-1 5-3l1-3c5-3 7-8 9-13 0-2 0-3 2-3l4-10 2-3c3-2 4-4 5-6l3-4 2-2v-4c0-2 1-2 2-2l1-2 5-9c1-1 1-3 3-3h3l-2 2h-2l1 3-2 2 2 1c3 0 7-4 6-7l7-10 1-4-3 1c-1 2-2 1-3 0-2-3-1-6 3-7 2-1 2-2 2-4v-3h3c3 0 3-2 3-5l2-5 2-4 1-2c-1-2 2-5 3-4 2 2 6 2 9 3 1-6 3-6 9-7l9-2-2 2h-3l5 1h5l-1-2h-3c6-2 13 0 19-3h1c1 0 3 0 4-2l2-1h7v-1l-2-2h-5c-2 0-4 0-5-2v-1c-2 1-5 1-6 3l-5 2c1-2 2-3 0-4l-2-1v-2h3l3 2c7 0 15-3 20-5l6-2h4l3 1 2-1 2-3c2 0 4-2 5-1l3 1 8-3 7-2 8-2h9l2-1 2-2 4 1h2l2 2v-1c1-2 2-3 5-4s6-2 8-6c3-4 7-8 12-10 3-1 5-2 6-4l1-2h-15l-35 4-39 6-26 4h-4v-1l9-15 1-3c3-3 6-6 7-10l6-10c1-4 3-9 6-12l5-10c2-4 6-6 5-10l1-2 2-2c5-9 10-20 12-30 0-1 1-4 3-4l3-2h5l3 1c0-2 2-1 3-1l6-3c2-1 3-2 4-1l2-1c0-2 1-2 1-1l3 1 4-2 2-2c2 2 3-1 4-1l3-1 2 1h3l2-3c2-1 3-2 5 0h6l3-1h3l4 1 3-1 15 1h3l4-1h-7l-2-1 2-1c3-2 12-4 16-4 2 0 3 1 3-1h2l11-2h8l5-1 8-2 8-2 8-1c6 0 11-4 16-7 2-1 3-3 2-5l-2-10-2-1h-2l-66 4-87 7c-10 0-20 2-29 3l-20 3-33 2c-5 0-8 0-13-2-1-1-3 0-4 1l-1 2 2 6c2 3 3 5 3 8s1 5 3 5l5 3c2 0 3 2 5 3 6 2 11 4 18 4 3 0 5 3 3 6l-1 3-7 13-2 2-4 6c-1 5-4 7-6 11l-6 8c-5 8-11 15-15 24-2 5-6 9-9 14l-8 13c-2 6-6 11-9 16-1 3-4 5-6 5h-26c-4 0-8 0-11-2h-2l-2 2 1 9 2 5c1 2 2 4 5 4l2 2 12 6c8 3 6 4 3 9l-26 48-8 17-20 35-13 25-4 8-4 7c-1 6-5 9-11 11l-17 7-7 2-16 4-11 2c-4 0-4 1-4 4v4Zm102-41 2-2h3l-7 7-1-2c0-3 0-3 3-3Zm47-79 2-3h1v1l-4 6h-1l-1-2c2 1 2-1 3-2Zm0 0"
          />
        </g>
        <path
          fill="#da291c"
          d="m991 589 3 5c1 4 4 6 5 8l1 2c5 1 9 5 15 5h2l7 1c2 0 2 1 2 3v2l-5 16c0 2-2 4 0 5 3 1 3-2 4-3 3-5 5-10 9-14l6-8c3-3 5-6 10-6l2-1 4-2c4-2 7-4 11-4l4-2h1l-2-2-4 2h-2l-1-2c0-1 0-2 2-2h2v-1l2-1 4-2 7-4 2-1 3-2 2-2 10-4h2c2 0 9-3 9-6h5l2-1h2v2h3l1-3c1-2 1 1 2 1l1-1 1-2 5-2c2 1 0 2 0 4l1-2 1-2 8-2h2l6-2h2c1 2 2 1 2 0 0-3 2-2 3-2 2 2 2 1 4 0l5-2c4 0 7 0 10-2l6-3 7-2h4l12-3h2l18-1h5l33-1c2 0 3-1 4-3l1-1c2 0 3-2 4-4 2-1 2-2 0-3l-4-1-10-2c-12-2-25-3-37-3l-31 2h-10l-31 5a136 136 0 0 0-34 9l-15 5-5 1h-2v-2l4-5 18-31 2-2 7-10 1-5c-1 3-4 5-7 7-2 2-3 4-3 7 0 1-2 6-4 6s-2 2-2 3c-2 2 0 2 1 2l-6 5-1 2c1 2-1 2-2 3l-4 3c-2 1-2 2-1 4l1 2c1 1 0 2-1 2l-4-1-2-1c1 0 5-1 5-3l1-3c5-3 7-8 8-13 0-1 0-3 2-2l4-9 3-4 4-5c0-2 1-3 3-4l2-2v-4c0-1 0-2 2-2l1-1 4-9c1-1 1-3 3-3l3 1-2 1h-2l1 3-2 2 2 1c3 0 7-4 6-7l6-9 2-4-4 1h-2c-2-3-1-5 2-7 2-1 3-2 3-4v-2h2c3-1 3-3 3-6l2-4 2-4v-2c0-1 2-4 3-3l9 3c1-6 3-7 8-7l9-2c0 2-1 2-2 2h-3l5 1h4l1-1-1-1h-2c5-2 11 0 17-3h1c1 0 3 0 4-2l2-1h6v-1l-2-1h-4c-2 0-4 0-5-3v-1l-6 3-4 2c1-1 2-3 0-3l-3-2v-2l4 1 3 1c6 0 13-2 19-4l5-2h4l2 1 3-2 2-2c1 0 3-2 4-1l3 1 8-3 7-1c2-2 4-2 6-2h9l2-2 2-1 4 1c1-2 1-1 2 0l2 2v-2c1-2 2-3 5-3 2-1 5-2 7-6 3-4 6-7 11-9 3-1 5-2 6-4l1-2h-14l-33 4-37 5-25 4h-3v-1c2-5 6-9 8-15l1-2 6-9 6-10 5-11 6-10c1-3 5-5 5-10v-1l2-2c5-8 9-19 11-28 0-2 2-4 3-4l4-2h4l2 1c1-2 3-1 4-1l5-3 4-1 2-1 1-1 3 1 3-1 2-3c2 2 3 0 5-1l2-1 2 1h3l2-2c2-1 3-2 4-1h4l2 1 3-1h30-7l-1-2h1l16-4h4l11-3h8l4-1 8-2 7-1 8-2c6 0 11-3 15-7 2 0 3-2 2-4l-2-9c0-2-1-2-2-2h-2l-62 4-82 7c-10 0-20 2-29 3l-18 3-31 2c-5 0-8 0-13-2-1-1-2 0-3 1l-1 2 2 5 2 8c0 3 1 4 4 5l4 2 4 3c7 3 11 4 18 4 3 0 4 3 2 6v2l-7 13-2 2-4 6c0 4-3 7-5 10l-6 8c-4 7-11 14-14 22l-8 14-9 12c-2 6-5 11-8 15-1 3-3 4-6 4h-25l-10-1h-1c-2 0-2 1-2 2v8l2 5c2 2 3 4 5 4l2 2 12 6c7 2 5 3 3 8l-25 45-8 17-19 33-12 23-4 8-4 6c-1 6-4 9-10 11l-16 6-7 2-15 5-11 1c-3 0-3 1-4 4v3Zm97-39 3-1h2l-6 6-2-1c0-3 1-4 3-4Zm45-74 2-2h1l-4 6h-1l-1-2c2 0 2-1 3-2Zm0 0"
        />
        <path
          className="fill-current text-white-900 dark:text-gray-900"
          d="M814 394c2-1 3-2 3-4h-5c-54 19-112 41-161 72l-3 1c1-3 6-3 5-7l5-1 14-12c4-4 6-8 11-10l3-4h-2v-2c0-4 2-6 4-7l2-3 4-5 6-7 11-14 6-7 8-10 5-6 2-4 2-2 1-2c2 0 3-3 4-5l1-2 5-5c2-3 4-6 8-7l1-2c3 0 3-4 5-5h4c-1-5 3-6 5-7l4-4c0-3 2-4 4-4s4-1 4-4l2-1c2-1 2-2 2-3l3-6c2-1 3-2 3-5l10-9h1l2 3 12-16 4-5 3-5c3-5 2-10 0-14l5-3c0-1-2-3-1-5 1-1 0-3-1-3l-7-2-3-2h-2c-4 4-9 9-15 11l-18 7c-25 10-49 21-76 27h-21c-3 0-5 0-8 3 5 13 18 13 31 13 5 0 9 0 13-2l24-5 23-7h2l-5 4-20 27-14 17-23 26-72 97-3 6-8 14-10 8v2c2 5 6 7 10 9l6 2c8-1 14-3 20-7l7-4 20-11 7-3 2-2c3-2 11-6 11-8l2-1c5-3 12-3 17-8h1c5-3 11-5 15-9l2-2 22-14 20-11c3-2 7-6 11-7l28-17Zm0 0"
        />
        <path
          className="fill-current text-white-900 dark:text-gray-900"
          d="M778 462c0 12 8 23 20 23l6-2c5-4 11-5 16-6 18-7 38-18 49-33l14-17c1-2 2 0 2 2l-2 2 4 2-6 10c5-5 12-12 16-19l7-12 4-4 10-22v-2l1-6 4-10 1-8 2-9-1-2 6-2 1-2h1l-1-2v2l-4 2c1-2 0-2-1-2l-2-1 4-1c0-10-4-54-19-54l-3 1-3 3v3l2 17v4c1 6-2 12-2 19-2 13-6 28-10 41-7 19-24 41-37 56l-2 1-6 4-9 11-18 15-18 14h-2l-2-9-1-12-3 3c1-3 2-5 1-6l1-7h1l9-20 2-4h-2c-4 9-10 17-12 27 0-5 2-9 3-13l1-4 6-15 6-12 3-5 1-2 2-3 4-5 9-9 7-10 8-10c2-2 5-3 6-6l-1 6h2l2-8h-2c3-5 8-7 12-9 1-3 1-4 3-4h4l10-10c7-6 11-12 12-21 0-3-6-11-8-11l-2 1-4 4-7 7c-26 20-74 75-87 108l-1 2-7 15c-2 9-2 17 0 26Zm110-41c1-3 0-6 4-6 2 0 2-5 0-7l6-4 1-5c2-1 1-6 5-5l1-2c-2-6 3-10 3-14h6l-4 10h2l-4 10v1l-6 9-5 7-8 6 4 2-7 2c0-3 0-4 2-4Zm26-59 5 2-5 3-1-1-1-2 2-2Zm-20-43h2c0-2 1-7 4-7l-4-2-2 9Zm-66 76 4-9c-6 6-6 6-4 9Zm-6 6 1-3-3 2-4 7Zm64 30 2-4h2l-2 6Zm32 61 2 2 2-1c14-9 27-30 37-44l8-16 4-7c2-3 3-7 7-9l2-3 1-5 7-7c5-5 8-12 12-18-4-1-2-4-1-6 1-4 2-7 6-9l1 15-2 24v14l-5 50-1 34c0 4 4 7 8 6h2c6 0 11 0 14-5l7-11 7-14 10-25 5-8 10-24 8-19 10-20 19-37 8-16 16-30 8-15 8-14-21 33-28 48c-14 26-30 51-45 76l-8 9-9 22-3 3h-2v-8l2-18 2-20 1-5-1-12 2-12 1-2 6-2c1-2 3-6-1-9l-2 8h-2l2-15c0 2 1 2 2 3h2c-2-5 6-8 1-13l1-2v-16l1-6-2-6c-1-9-9-17-17-17-4 0-8 1-10 4l-14 19-61 107c-7 14-17 33-17 49Zm76-109 2 4-3 2-1-1v1l-4 4c-1-4 2-7 6-10Zm144-117v6l2-2Zm0 0"
        />
        <path
          fill="#cd6c14"
          fill-opacity=".4"
          d="m309 305 2 2h3c3 0 5-2 6-5 2-4 3-8 6-10 1-2 4-3 4-6l2-2 1-1 12-17 8-9 8-8c0-2 2-2 3-3l7-3c4-1 7-4 11-3 3-3 8-3 11-5l5-3 3-2 8-3 7-3 2-2 6-2 7-2 12-2v2l-3 7-4 11-2 8c-1 3-4 9-4 13l-1 3-1 3-2 6a200 200 0 0 1-7 26c0 2-3 4-2 7l-2 7-2 11-5 15-3 4-1 11v2l-2 9-2 12v2l-2 8v3c-2 2-2 4-2 6l-1 2-1 13c4 2 7 3 11 3v-3l1-8-2 2-2-2-2 2-2-2v-4h-2l2-4h2v-5l2-2 1-4h2v3c3-4 6-6 6-10l2-3c0-2 0-4 2-6l1-2v-5h-2l2-3v-3l1-4 2-2v-5c4-1 3-6 6-8-1-1-1-3-4-2v-2h5c-1-3 1-3 2-5v-1l-2-2c2 0 2-2 3-2 2-2 0-4 1-6l4-6h3c0-1 0-2-3-2l3-2v-7h2c0-1 0-3-2-4 4 0 3-4 5-5-2-3-2-5 0-7l3 3 1-6 3-4c-1-1-2-1-2-3 1 0 3 1 3-1 3-3 2-7 4-10-1 0-2-1-1-3 0 0 0-2 1 0l2-4 4-11 2-3 1-3v-1c0-3 2-5 3-7l7-17c-1-2 1-4 3-4l13-2 5-3 2-2-2-7-3-1h-2l-9 2-1-1c1-3 2-7 4-9l2-6 1-5c2 0 1-2 2-4l3-5c1-2 1-5 3-7l3-9c2-4 2-7 5-9l6-12c-1-3 2-6 2-9l3-4c3-9 8-17 14-24l1-2 1-6c2-1 2-3 2-4v-4l1-2c2-1 2-2 2-3V54l1-1c-2-5-5-6-9-6l-3-1h-2c-4 0-9 10-11 13v1c-3 4-7 9-9 14l-4 8-2 1c-2-4-4-8-8-10l-5 4-2 2-4 4-10 12c-1 2-2 4-5 6l-6 6-4 4-1 1-17 17-7 8-17 18h-1l-2 4-2 4c-1 3-4 4-5 6l-13 18-9 12-9 10-2 4-5 5h-8l-3 1h-2l-3 1h-6l-3 1-6-2h-3v5c-1 4 1 7 3 10l3 5c1 2 4 1 5 3 2 1 2 2 0 5l-4 6-1 2-7 13-7 10-5 9c-4 5-7 11-5 18Zm91-105 7-5 3-3 3-3 4-5c2-4 5-8 8-10h1l8-8 7-6c3-3 7-5 9-10l5-5 7-6c1-1 1-2 3-2l2-2v-2l2-2-1 6-8 17-5 15v5l-1 2-1 7-2 7-2 7c-1 2-2 3-4 3l-8 1-5 1h-8l-9 1-4 1h-2l-6 1h-4c-1-2 0-4 1-5Zm78 110 3 10c0 2 4 4 6 3l3 2 4 5c3 1 3 3 3 6h3c6 3 12 4 18 4h8l3 1 2 2 3-2 4 1 6-3 3-3c5 0 6-4 8-7l4-5c4-1 5-5 6-8l5-6c5-2 7-8 5-11l3-1 9-17-3-3 4-2c1-5 4-9 6-14l6-15 2-7c1-3 0-6 2-8 3-3 2-6 1-8-2-4 1-5 3-6l4-1c1 0 3 1 3 3h-2l-3 2 2 3 3-1 4-4c-4-4-4-7 6-9l2 3c6-1 9-4 12-9 2-2 3-5 6-6l9-5c3-2 3-4 0-4l-2-1-3 1-10 2c-11 5-21 8-33 8h-15c-7 1-15 3-18 10l6 6c7 8 8 15 5 23l-16 28-29 40c-5 8-12 13-19 19-2 2-4 2-5 2-7 0-9-6-9-12l2-16c-6 6-4 15-8 21l-6-9-1 2c-4-12 16-62 25-68 0 6-5 10-3 16a176 176 0 0 0 12-21c4-4 8-7 10-11 5-9 9-17 17-22l1-3 5-6 2 1c3 0 3-4 4-5l2-3c3-1 5-4 8-8l2-1-2-1 6-5 2-4 14-15 11-11 8-7 18-15-2 4-15 29-1 6c0 5 1 7 4 7s7-2 10-4c2-1 4-3 2-6v-3c3-3 5-8 11-7l1-1-2-5 5 2v-5l9-6-1-3 5-2-4-1 7-6 4-5c2-3 5-5 4-7-2-4 1-8 1-11v-7l2-9c-1-3-3-4-5-5l-5-3c-2 0-3 2-5 5l-8 16-5-9-11-7-29 19a358 358 0 0 0-131 195l2 14Zm31-11h2l11-27-2-1 2-1 1-2 3-7 2-6h-2l-9 16-2-1-3 2c5 2 6 4 3 9l-6 13v5Zm20-47h2c3 0 4-2 5-3l-2-1 5-9-10 13Zm-4-17 2 2-4 7v-2h-2Zm50-53h1v2l-6 4v-2c1-2 3-4 5-4Zm186 100 3-5-11-1c-32 0-89 23-118 35l-2-4 5-5c8-7 12-13 18-21l13-22h1l2 2c4-3 4-3 3-7 0-4 2-8 5-8v-7l3 4 12-18 12-26 5-7 11-17 2-2 7-11 9-20c1-3 2-7 5-10 4-5 11-24 12-30V90c0-8-4-14-10-18l-7-5-4 5-4 12c-3 9-5 18-9 26l-28 52-26 50-8 17-3 3-20 35-14 26c-2 4-4 9-3 14l-2 5-2 6c0 4-3 5-6 7l-15 7c2 7 3 9 10 11l8 1c2 0 3 0 5-3h1l12-5c4-3 10-4 12-10h1l8-3c3-3 5-4 8-4l5 1c1-5 14-11 19-11l4-1c3-3 7-6 13-6l8-1c5-5 9-7 15-7l4-2h1c2-3 4-4 4-3l4 3 3-1 24-2 4-3v-2Zm-140 36-2-1v-2l5-9-1 8 2-1-4 5Zm0 0"
        />
        <path
          fill="#cd6c14"
          fill-opacity=".4"
          d="m940 174-11-2h-11c-18 0-36 2-54 4l16-33c3-5 7-10 8-15 2-5 4-6 9-7l9-1 23-2 7-1c13-1 45-6 53-11 6-5 11-6 17-8 4 0 7-2 11-3l2-2-2-1 2-5-19-2a2649 2649 0 0 0-96 3h-19l-16 2-20-1c-4 0-8 2-7 5 2 7 6 14 12 17 4 3 10 4 14 6l-9 12-17 29-10 18-2 4c4 2 1 3 0 4l-10 16-24 42-10 18-10 20c-7 12-13 24-29 26-5 1-6 7-2 11l3 3c3 1 4 4 5 8 1 7 1 7 8 7 6 0 8-2 11-6 3-3 3-3 7-3l-4 7h2l4-7 8-8 27-8c3-1 7-1 10-3l22-8 10-4 42-15c6-2 13-5 16-12l4 1c4 0 8-4 10-9-43 2-85 14-126 26l7-9 13-22 13-26 15-27c1-2 3-2 4-2l20 2 30-4c5-1 11-1 13-8l1-1 2-2h-6c1-3 3-5 4-5h7l-4 3 3 2 15-7 1-5-2-1Zm-27 92 3 1-9 7 1-5h1c2-2 2-3 4-3Zm0 0"
        />
        <path
          className="fill-current text-white-900 dark:text-gray-900"
          d="m309 305 2 2h3c3 0 5-2 6-5 2-4 3-8 6-10 1-2 4-3 4-6l2-2 1-1 12-17 8-9 8-8c0-2 2-2 3-3l7-3c4-1 7-4 11-3 3-3 8-3 11-5l5-3 3-2 8-3 7-3 2-2 6-2 7-2 12-2v2l-3 7-4 11-2 8c-1 3-4 9-4 13l-1 3-1 3-2 6a200 200 0 0 1-7 26c0 2-3 4-2 7l-2 7-2 11-5 15-3 4-1 11v2l-2 9-2 12v2l-2 8v3c-2 2-2 4-2 6l-1 2-1 13c4 2 7 3 11 3v-3l1-8-2 2-2-2-2 2-2-2v-4h-2l2-4h2v-5l2-2 1-4h2v3c3-4 6-6 6-10l2-3c0-2 0-4 2-6l1-2v-5h-2l2-3v-3l1-4 2-2v-5c4-1 3-6 6-8-1-1-1-3-4-2v-2h5c-1-3 1-3 2-5v-1l-2-2c2 0 2-2 3-2 2-2 0-4 1-6l4-6h3c0-1 0-2-3-2l3-2v-7h2c0-1 0-3-2-4 4 0 3-4 5-5-2-3-2-5 0-7l3 3 1-6 3-4c-1-1-2-1-2-3 1 0 3 1 3-1 3-3 2-7 4-10-1 0-2-1-1-3 0 0 0-2 1 0l2-4 4-11 2-3 1-3v-1c0-3 2-5 3-7l7-17c-1-2 1-4 3-4l13-2 5-3 2-2-2-7-3-1h-2l-9 2-1-1c1-3 2-7 4-9l2-6 1-5c2 0 1-2 2-4l3-5c1-2 1-5 3-7l3-9c2-4 2-7 5-9l6-12c-1-3 2-6 2-9l3-4c3-9 8-17 14-24l1-2 1-6c2-1 2-3 2-4v-4l1-2c2-1 2-2 2-3V54l1-1c-2-5-5-6-9-6l-3-1h-2c-4 0-9 10-11 13v1c-3 4-7 9-9 14l-4 8-2 1c-2-4-4-8-8-10l-5 4-2 2-4 4-10 12c-1 2-2 4-5 6l-6 6-4 4-1 1-17 17-7 8-17 18h-1l-2 4-2 4c-1 3-4 4-5 6l-13 18-9 12-9 10-2 4-5 5h-8l-3 1h-2l-3 1h-6l-3 1-6-2h-3v5c-1 4 1 7 3 10l3 5c1 2 4 1 5 3 2 1 2 2 0 5l-4 6-1 2-7 13-7 10-5 9c-4 5-7 11-5 18Zm91-105 7-5 3-3 3-3 4-5c2-4 5-8 8-10h1l8-8 7-6c3-3 7-5 9-10l5-5 7-6c1-1 1-2 3-2l2-2v-2l2-2-1 6-8 17-5 15v5l-1 2-1 7-2 7-2 7c-1 2-2 3-4 3l-8 1-5 1h-8l-9 1-4 1h-2l-6 1h-4c-1-2 0-4 1-5Zm78 110 3 10c0 2 4 4 6 3l3 2 4 5c3 1 3 3 3 6h3c6 3 12 4 18 4h8l3 1 2 2 3-2 4 1 6-3 3-3c5 0 6-4 8-7l4-5c4-1 5-5 6-8l5-6c5-2 7-8 5-11l3-1 9-17-3-3 4-2c1-5 4-9 6-14l6-15 2-7c1-3 0-6 2-8 3-3 2-6 1-8-2-4 1-5 3-6l4-1c1 0 3 1 3 3h-2l-3 2 2 3 3-1 4-4c-4-4-4-7 6-9l2 3c6-1 9-4 12-9 2-2 3-5 6-6l9-5c3-2 3-4 0-4l-2-1-3 1-10 2c-11 5-21 8-33 8h-15c-7 1-15 3-18 10l6 6c7 8 8 15 5 23l-16 28-29 40c-5 8-12 13-19 19-2 2-4 2-5 2-7 0-9-6-9-12l2-16c-6 6-4 15-8 21l-6-9-1 2c-4-12 16-62 25-68 0 6-5 10-3 16a176 176 0 0 0 12-21c4-4 8-7 10-11 5-9 9-17 17-22l1-3 5-6 2 1c3 0 3-4 4-5l2-3c3-1 5-4 8-8l2-1-2-1 6-5 2-4 14-15 11-11 8-7 18-15-2 4-15 29-1 6c0 5 1 7 4 7s7-2 10-4c2-1 4-3 2-6v-3c3-3 5-8 11-7l1-1-2-5 5 2v-5l9-6-1-3 5-2-4-1 7-6 4-5c2-3 5-5 4-7-2-4 1-8 1-11v-7l2-9c-1-3-3-4-5-5l-5-3c-2 0-3 2-5 5l-8 16-5-9-11-7-29 19a358 358 0 0 0-131 195l2 14Zm31-11h2l11-27-2-1 2-1 1-2 3-7 2-6h-2l-9 16-2-1-3 2c5 2 6 4 3 9l-6 13v5Zm20-47h2c3 0 4-2 5-3l-2-1 5-9-10 13Zm-4-17 2 2-4 7v-2h-2Zm50-53h1v2l-6 4v-2c1-2 3-4 5-4Zm186 100 3-5-11-1c-32 0-89 23-118 35l-2-4 5-5c8-7 12-13 18-21l13-22h1l2 2c4-3 4-3 3-7 0-4 2-8 5-8v-7l3 4 12-18 12-26 5-7 11-17 2-2 7-11 9-20c1-3 2-7 5-10 4-5 11-24 12-30V90c0-8-4-14-10-18l-7-5-4 5-4 12c-3 9-5 18-9 26l-28 52-26 50-8 17-3 3-20 35-14 26c-2 4-4 9-3 14l-2 5-2 6c0 4-3 5-6 7l-15 7c2 7 3 9 10 11l8 1c2 0 3 0 5-3h1l12-5c4-3 10-4 12-10h1l8-3c3-3 5-4 8-4l5 1c1-5 14-11 19-11l4-1c3-3 7-6 13-6l8-1c5-5 9-7 15-7l4-2h1c2-3 4-4 4-3l4 3 3-1 24-2 4-3v-2Zm-140 36-2-1v-2l5-9-1 8 2-1-4 5Zm0 0"
        />
        <path
          className="fill-current text-white-900 dark:text-gray-900"
          d="m940 174-11-2h-11c-18 0-36 2-54 4l16-33c3-5 7-10 8-15 2-5 4-6 9-7l9-1 23-2 7-1c13-1 45-6 53-11 6-5 11-6 17-8 4 0 7-2 11-3l2-2-2-1 2-5-19-2a2649 2649 0 0 0-96 3h-19l-16 2-20-1c-4 0-8 2-7 5 2 7 6 14 12 17 4 3 10 4 14 6l-9 12-17 29-10 18-2 4c4 2 1 3 0 4l-10 16-24 42-10 18-10 20c-7 12-13 24-29 26-5 1-6 7-2 11l3 3c3 1 4 4 5 8 1 7 1 7 8 7 6 0 8-2 11-6 3-3 3-3 7-3l-4 7h2l4-7 8-8 27-8c3-1 7-1 10-3l22-8 10-4 42-15c6-2 13-5 16-12l4 1c4 0 8-4 10-9-43 2-85 14-126 26l7-9 13-22 13-26 15-27c1-2 3-2 4-2l20 2 30-4c5-1 11-1 13-8l1-1 2-2h-6c1-3 3-5 4-5h7l-4 3 3 2 15-7 1-5-2-1Zm-27 92 3 1-9 7 1-5h1c2-2 2-3 4-3Zm0 0"
        />
      </svg>
      <div className="lamp">
        <div className="relative w-full h-full">
          <Picture
            onLoad={() => setLampLoaded(true)}
            quality={76}
            hasNotPreview
            fixedWidth
            className="h-full select-none"
            src="ceilingLamp.png"
            loading="eager"
            alt="Llampa per te nderuar light ose dark mode e web"
            sizes="desktop-big=350,0.46622516556;mobile=100,0.46622516556"
          />
          {lampLoaded && (
            <Fragment>
              <span className="lamp-light is--shadow" />
              <span className="lamp-light" />
            </Fragment>
          )}
        </div>
      </div>
      <IntroductionChair />
      <Header />
      <h1 className="mt-auto pb-4 max-w-[900px] z-10">
        <span>SHIJO</span> <span>EKSPERIENCEN</span> <span>E RE</span> <span>TE PRODUKTEVE GAMING</span>
      </h1>
      <p className="text md:pb-24 text-gray-400 dark:text-white-400 lg:max-w-[585px] md:max-w-[380px] max-w-full font-small z-10">
        <span className="px-[2px]">Ne Kujdesemi</span>
        <span className="px-[2px]">per rehatine dhe stabilitetin</span>
        <span className="px-[2px]">e Lojtareve.</span>
        <span className="px-[2px]"> Oret e gjata</span>
        <span className="px-[2px]">te qendrimit tani</span>
        <span className="px-[2px]">jane nje problem me pak!</span>
      </p>
    </Section>
  );
};

export default Introduction;
