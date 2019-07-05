import { IApi } from 'umi-plugin-types';
import patch from './patch';

const path = require('path');
const loader = path.join(__dirname, './loader');

export default function(api: IApi) {
  // patch getRouteConfigFromDir
  patch();

  // url-loader excludes
  api.modifyDefaultConfig(config => {
    return {
      ...config,
      urlLoaderExcludes: [/.md$/],
    };
  });

  // loader
  api.chainWebpackConfig(config => {
    config.module
      .rule('md')
      .test(/.md$/)
      .use(loader)
      .loader(loader);
  });
}
