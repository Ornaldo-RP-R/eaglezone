import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use(express.static(path.resolve(__dirname, "public")));

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

      const { appHtml, headString } = await render(url);

      let html = template.replace(`<!--ssr-outlet-->`, appHtml);
      html = html.replace(
        /<!--  head-outlet  -->(.|\n)*<!--  end of head-outlet  -->/,
        `<!--  head-outlet  -->${headString}<!--  end of head-outlet  -->`
      );
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(process.env.PORT || 5173);
}

createServer();
