// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/css/style.scss";',
      },
    },
  },
};
