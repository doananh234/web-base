const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const themeConfig = require('./src/configs/theme');

/* eslint-disable */
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': themeConfig.palette.primaryColor,
      '@input-hover-border-color': themeConfig.palette.secondaryColor,
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};
