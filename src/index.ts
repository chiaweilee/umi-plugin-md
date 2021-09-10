import { IApi } from 'umi-plugin-types';
import getRouteConfigFromDir from './helpers/getRouteConfigFromDir';
import mergeRoute from './helpers/mergeRoute';

const path = require('path');
const loader = path.join(__dirname, './loader');

export { default as slug } from './helpers/slug';

export interface IOption {
  wrapper?: string;
  className?: string;
  style?: object;
  anchor?: string[] | boolean;
  render?: (rawHtml: string) => string;
}

interface ExIApi extends IApi {
  service: Service;
  describe?: any;
}

interface Service {
  paths: Paths;
}

interface Paths {
  cwd: string;
  absPagesPath: string;
  absSrcPath: string;
  dirPath?: string;
}

export default function(api: ExIApi, option = {} as IOption) {
  if (typeof api.describe === 'function') {
    api.describe({ key: 'md' });
  }

  api.modifyRoutes((routes: any[]) => {
    const mdRoutes = getRouteConfigFromDir(api.service.paths);
    return mergeRoute(mdRoutes, routes);
  });

  // loader
  api.chainWebpackConfig(memo => {
    if (memo.module.rule('plaintext')) {
      memo.module.rule('plaintext').exclude.add(/\.md$/);
    }
    if (memo.module.rule('exclude')) {
      memo.module.rule('exclude').exclude.add(/\.md$/);
    }
    memo.module
      .rule('md')
      .test(/.md$/)
      .use(loader)
      .options(option)
      .loader(loader);
  });
}
