import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import minify from "rollup-plugin-babel-minify";

module.exports = {
  input: "src/index.js",
  plugins: [resolve(), commonjs(), babel(), minify()],
  output: {
    sourcemap: true,
    file: "dist/bundle.js",
    format: "cjs"
  }
};
