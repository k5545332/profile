// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/css/app.scss";',
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
};
