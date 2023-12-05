// entry-server.jsx
import { renderToString } from "preact-render-to-string";
import Main from "./main.jsx";
import Head from "./components/Head/index.jsx";

export async function render(url) {
  // Define the default head content
  const headProps = {
    title: "Gaming Chairs, Karrige gaming, produkte Gaming",
    description:
      "Gjeni gaming chair / karrike loje me cilësi të lartë në Tirane në EagleZone.al. Përveç karrigës së lojërave, ne ofrojmë dhe aksesore për game, si kompjutera, kufje tastjera dhe shumë të tjera. Bëhuni një pjesë e komunitetit tonë të gamingut sot!",
    image: "https://api.menaxhimbiznesi.com/api/File/Retrieve?file=ogImage.jpg&quality=85",
    url: "https://www.eaglezone.al/",
    type: "website",
    keywords:
      "karrige gaming,karrige gaming ne shitje,karrige gaming online,karrige gaming white shark,karrige gaming trust ,karrige gaming razer,karrige gaming tirane,karrige gaming shqiperi",
  };

  // Extract the head content from the Main component
  // Render the Head component to a string
  const headString = renderToString(<Head {...headProps} />);

  // Render the Main component to a string
  const appHtml = renderToString(<Main />);

  return { appHtml, headString };
}
