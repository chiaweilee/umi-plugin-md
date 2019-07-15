const highlight = require('highlight.js');

export default function(source: string, lang): string {
  if (!(lang && highlight.getLanguage(lang))) {
    return '';
  }
  return highlight.highlight(lang, source, true).value;
}
