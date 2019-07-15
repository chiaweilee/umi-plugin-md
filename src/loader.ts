import { IOption } from './index';
import markdown from './lib/markdown';
import replaceArchor from './lib/replaceArchor';

function replace(source: string): string {
  return source.replace(/([{}])/g, "{'$1'}");
}

export default function loader(source: string) {
  const opts: IOption = {
    // default opts
    wrapper: 'section',
    anchor: ['h1', 'h2', 'h3'],
  };

  if (this) {
    if (typeof this.cacheable === 'function') {
      this.cacheable();
    }

    Object.assign(opts, require('loader-utils').getOptions(this));
  }

  const { wrapper, className, style, ...options } = opts;

  const code: string = require('xss')(
    replace(replaceArchor(markdown(source, options), opts.anchor)),
  );

  const result = `<${opts.wrapper} className="${className}" style={${style}}>${code}</${wrapper}>`;

  const component = `import React from 'react';
  export default class A extends React.PureComponent {
    render() {
      return (${result});
    }
  }`;

  return require('@babel/core').transform(component, {
    plugins: ['@babel/plugin-transform-react-jsx'],
  }).code;
}
