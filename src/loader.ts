import { IOption } from './index';

const highlight = require('highlight.js');

const renderHighlight = function(source: string, lang): string {
  if (!(lang && highlight.getLanguage(lang))) {
    return '';
  }
  return highlight.highlight(lang, source, true).value;
};

const markdown = function(source: string, options = {} as object): string {
  return require('markdown-it')(
    'default',
    Object.assign(
      {
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true,
        typographer: true,
        highlight: renderHighlight,
      },
      options,
    ),
  ).render(source);
};

export default function loader(source: string) {
  const opts: IOption = {
    // default opts
    wrapper: 'section',
  };

  if (this) {
    if (typeof this.cacheable === 'function') {
      this.cacheable();
    }

    Object.assign(opts, require('loader-utils').getOptions(this));
  }

  const { wrapper, className, style, ...options } = opts;

  const code: string = markdown(source, options);

  const component = `import React from 'react';
  export default function() {
    return (<${opts.wrapper} className="${className}" style={${style}}>${code}</${wrapper}>);
  }`;

  return require('@babel/core').transform(component, {
    plugins: ['@babel/plugin-transform-react-jsx'],
  }).code;
}
