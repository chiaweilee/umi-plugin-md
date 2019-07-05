const path = require('path');
const loader = path.resolve('./lib');

export default {
  urlLoaderExcludes: [/.md$/],
  chainWebpack(config) {
    config.plugins.delete('progress');

    config.module
      .rule('md')
      .test(/.md$/)
      .use(loader)
      .loader(loader);
  },
};
