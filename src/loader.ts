import { IOption } from './index';
import defaultRender from './render';
import helpers from './helpers';

export default function loader(source: string) {
  const opts: IOption = {
    // default opts
    wrapper: 'section',
    anchor: ['h1', 'h2', 'h3'],
    render: defaultRender,
  };

  if (this) {
    if (typeof this.cacheable === 'function') {
      this.cacheable();
    }

    Object.assign(opts, require('loader-utils').getOptions(this));
  }

  const { anchor, wrapper, className, style, render, ...options } = opts;
  const rawHtml = helpers(source, {
    markdown: options,
    anchor,
    wrapper,
    className,
    style,
  });

  return require('@babel/core').transformSync(render(rawHtml), {
    presets: ['@babel/preset-react'],
    plugins: ['@babel/plugin-transform-react-jsx'],
    babelrc: false,
    configFile: false,
  }).code;
}
