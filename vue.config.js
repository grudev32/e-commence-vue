module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Ecomart - Home";
      return args;
    });
  },
  configureWebpack: {
    externals: {
      jquery: "jQuery"
    }
  }
};
