const hljs = require('highlight.js');

export default function(source: string, lang): string {
  if (!(lang && hljs.getLanguage(lang))) {
    return '';
  }
  return hljs.highlight(source, { language: lang }).value;
}
