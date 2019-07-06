import { IApi } from 'umi-plugin-types';
import patch from './patch';

const path = require('path');
const loader = path.join(__dirname, './loader');

export interface IOption {
  wrapper?: string;
  className?: string;
  style?: string;
}

export default function(api: IApi, option = {} as IOption) {
  // patch getRouteConfigFromDir
  api.onStart(() => {
    patch(api.debug);
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
      .options(option)
      .loader(loader);
  });
}
