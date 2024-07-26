module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["last 10 versions", "ie >= 11"],
    }),
  ],
};
