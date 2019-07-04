module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-custom-properties")({
      preserve: false
    }),
    require("postcss-csso"),
    require("mqpacker")({ sort: true })
  ]
};
