console.log(require("path").join(__dirname, "public"));
module.exports = {
  map: {
    inline: false
  },
  plugins: [
    require("postcss-import"),
    require("postcss-custom-media"),
    require("postcss-custom-properties")({
      preserve: false
    }),
    require("@fullhuman/postcss-purgecss")({ content: ["src/*.html"] }),
    require("postcss-csso"),
    require("mqpacker")({ sort: require("sort-css-media-queries") })
  ]
};
