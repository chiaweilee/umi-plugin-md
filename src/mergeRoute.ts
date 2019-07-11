const forEach = require('lodash/forEach');
const every = require('lodash/every');
const sortBy = require('lodash/sortBy');

interface Routes {
  path: string;
  routes?: Routes;
}

export default function mergeRoute(source: Routes[], target: Routes[]): Routes[] {
  if (!Array.isArray(source)) { source = []; }
  if (!Array.isArray(target)) { target = []; }

  forEach(source, s => {
    const max = target.length;
    every(target, (t, i) => {
      if ((t.path === s.path)) {
        target[i] = s;
        if (Array.isArray(t.routes) || Array.isArray(s.routes)) {
          // @ts-ignore
          target[i].routes = mergeRoute(s.routes, t.routes);
        }
        return false;
      } else if (max === i + 1) {
        target.push(s);
      }
      return true;
    });
  });
  return sortBy(target, 'path');
}
