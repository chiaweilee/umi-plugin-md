import React from 'react';

const highlight = require('highlight.js');
const renderHighlight = function(str: string, lang): string {
  if (!(lang && highlight.getLanguage(lang))) {
    return '';
  }
  return highlight.highlight(lang, str, true).value;
};

export default function(source: string) {
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

  const code: string = require('markdown-it')('default', {
    html: true,
    highlight: renderHighlight,
    wrapper: opts.wrapper,
  }).render(source);

  return function(props): React.ReactElement {
    return React.createElement(opts.wrapper, { ...props }, [code]);
  };
}
