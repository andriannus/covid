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

  pwa: {
    name: 'COVID19 Monitoring',
    themeColor: '#ffffff',
    manifestOptions: {
      background_color: '#ffffff',
      description: 'COVID19 Monitoring with Vue.js and TypeScript',
      short_name: 'COVID19',
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },

  chainWebpack(config) {
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
