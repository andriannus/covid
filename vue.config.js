module.exports = {
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: ['./node_modules'],
        },
      },
    },
  },

  chainWebpack: config => {
    config.plugin('html').tap(options => {
      options[0].title = 'COVID19';
      return options;
    });

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            {
              prefixIds: true,
            },
          ],
        },
      });
  },
};
