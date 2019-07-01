module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-custom-properties"),
    require("mqpacker")({ sort: true }),
    require("cssnano")({
      preset: ["advanced", { discardComments: { removeAll: true } }]
    }),
    require("postcss-reporter")
  ]
};
