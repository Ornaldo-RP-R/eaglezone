import "./preact-polyfill.js";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";
import CompressionPlugin from "vite-plugin-compression";
import htmlMinifier from "html-minifier-terser";

export default defineConfig({
  base: "/",
  plugins: [
    preact(),
    VitePWA(),
    CompressionPlugin({
      algorithm: "brotliCompress",
      ext: ".br",
      level: 11,
      threshold: 10240,
    }),
    CompressionPlugin({
      algorithm: "gzip",
      ext: ".gz",
      level: 7,
      threshold: 10240,
    }),
    {
      name: "html-minifier",
      transformIndexHtml(html) {
        return htmlMinifier.minify(html, {
          collapseWhitespace: true,
          missingWhitespaceBetweenAttributes: true,
        });
      },
    },
  ],
  server: {
    proxy: {
      "/static": "public",
    },
  },
  build: {
    // ssr: {
    //   outDir: "dist/server", // Specify the output directory for the server build
    // },
    commonjsOptions: {
      ignore: ["conditional-runtime-dependency"],
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    assetsDir: "assets",
    outDir: "dist",
    assetsInclude: ["**/*.{js,css,jpg,jpeg,png,svg,gif}", "**/*.{woff,woff2,ttf}"],
    headers: {
      "Cache-Control": "public, max-age=31536000", // Set caching for one year
    },
    http2: {
      push: true,
      pushAssets: true,
      manifest: true,
      priority: {
        fonts: -1, // Load fonts and images after CSS and before JS
        css: -2, // Load CSS before JS
        images: -3, // This can improve performance by allowing the browser to download the assets while the JS is being parsed and executed
      },
    },
    optimizeDeps: {
      include: ["@babel/polyfill", "preact"],
    },
    emptyOutDir: true,
  },
  extensions: [".js", ".jsx", ".ts", ".tsx"],
});
