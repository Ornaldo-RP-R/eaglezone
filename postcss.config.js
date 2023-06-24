export default {
  plugins: {
    tailwindcss: {},
    "postcss-preset-env": {
      stage: 1,
      autoprefixer: {
        grid: true,
        flexbox: "no-2009",
        overrideBrowserslist: ["> 1%", "last 2 versions", "not ie <= 11", "not dead"],
      },
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
        "custom-properties": {
          preserve: false,
          warnings: true,
        },
      },
    },
    cssnano: {
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
  },
};
