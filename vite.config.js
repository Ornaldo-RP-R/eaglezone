import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";
import CompressionPlugin from "vite-plugin-compression";
import Fonts from 'unplugin-fonts/vite'
import { minify } from "uglify-js";
import htmlMinifier from "html-minifier-terser";

export default defineConfig({
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
    Fonts({
      google: {
        families: [
          {
            name: "Alegreya SC",
            styles: "ital,wght@0,500;0,700;1,700",
            display: "swap",
          },
        ],
        text: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ë",
      },
    }),
    {
      name: "uglify-js",
      async transform(code, id) {
        if (id.endsWith(".js")) {
          const minified = await minify(code);
          return {
            code: minified.code,
            map: minified.sourceMap,
          };
        }
      },
    },
    {
      name: "html-minifier",
      transformIndexHtml(html) {
        return htmlMinifier.minify(html, {
          collapseWhitespace: true,
          removeComments: true,
          missingWhitespaceBetweenAttributes: true,
        });
      },
    },
  ],
  build: {
    target: "esnext",
    minify: true,
    ssr: false,
    rollupOptions: {
      output: {
        manualChunks: {
          preact: ["preact/compat", "preact/hooks"],
        },
      },
    },
    commonjsOptions: {
      ignore: ["conditional-runtime-dependency"],
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    assetsDir: "assets",
    outDir: "dist",
    // Enable caching for static assets
    // Cache settings can be further customized for each asset type
    // by modifying the Cache-Control header
    assetsInclude: ["**/*.{js,css,jpg,jpeg,png,svg,gif,woff,woff2,ttf}"],
    // Use browser caching
    // Set the maximum age for each asset to one year
    // This tells the browser to cache the asset for a year
    // before requesting it again from the server
    sourcemap: false,
    http2: {
      push: true,
      pushAssets: true,
      manifest: true,
      priority: {
        // Load CSS before JS
        // This can improve performance by allowing the browser to start
        // rendering the page as soon as possible
        css: -1,
        // Load fonts and images after CSS and before JS
        // This can improve performance by allowing the browser to
        // download the assets while the JS is being parsed and executed
        fonts: -2,
        images: -3,
      },
    },
    optimizeDeps: {
      include: ["@babel/polyfill"],
    },
    emptyOutDir: true,
  },
});
