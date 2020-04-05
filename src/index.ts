import { IApi } from 'umi-plugin-types';
import getRouteConfigFromDir from './helpers/getRouteConfigFromDir';
import mergeRoute from './helpers/mergeRoute';

interface ExIApi extends IApi {
  service: Service;
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

const path = require('path');
const loader = path.join(__dirname, './loader');

export default function(api: ExIApi, option = {} as any) {
  api.modifyRoutes((routes: any[]) => {
    const mdRoutes = getRouteConfigFromDir(api.service.paths);
    return mergeRoute(mdRoutes, routes);
  });

  // url-loader excludes
  api.modifyDefaultConfig(config => {
    return {
      ...config,
      urlLoaderExcludes: [/.mdx?$/],
    };
  });

  // loader
  api.chainWebpackConfig(config => {
    config.module
      .rule('mdx')
      .test(/.mdx?$/)
      .use(loader)
      .options(option)
      .loader(loader)
      .end()
      .use('mdx')
      .options(option)
      .loader('@mdx-js/loader');
  });
}
