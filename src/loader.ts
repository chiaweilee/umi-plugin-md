const highlight = require('highlight.js');

const renderHighlight = function(source: string, lang): string {
  if (!(lang && highlight.getLanguage(lang))) {
    return '';
  }
  return highlight.highlight(lang, source, true).value;
};

const markdown = function(source: string, wrapper: string): string {
  return require('markdown-it')('default', {
    html: true,
    highlight: renderHighlight,
    wrapper,
  }).render(source);
};

export default function loader(source: string) {
  const opts = {
    // default opts
    wrapper: 'section',
  };

  if (this) {
    if (typeof this.cacheable === 'function') {
      this.cacheable();
    }

    Object.assign(opts, require('loader-utils').getOptions(this));
  }

  const code: string = markdown(source, opts.wrapper);

  const component = `import React from 'react';
  export default function({ className, style }) {
    return <${opts.wrapper} className={className} style={style}>${code}</${opts.wrapper}>;
  }`;

  return require('@babel/core').transform(component, {
    plugins: ['@babel/plugin-transform-react-jsx'],
  }).code;
}
