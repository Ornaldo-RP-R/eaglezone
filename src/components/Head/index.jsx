// Head.jsx
import { h, Fragment } from "preact";

const Head = ({ title, description, image, url, type, keywords }) => (
  <Fragment>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    {/* Open Graph tags */}
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content="Eagle Zone" />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type || "website"} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Additional SEO tags */}
    <meta name="robots" content="index, follow" />
    {/* Add more SEO-related meta tags as needed */}
  </Fragment>
);

export default Head;
