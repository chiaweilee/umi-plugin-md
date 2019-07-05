import { IApi } from 'umi-plugin-types';
import patch from './patch';

const path = require('path');
const loader = path.join(__dirname, './loader');

interface IOption {
  wrapper?: string;
}

export default function(api: IApi, option = {} as IOption) {
  // patch getRouteConfigFromDir
  api.onStart(() => {
    patch();
  });

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
      .options({
        wrapper: option.wrapper,
      })
      .loader(loader);
  });
}
