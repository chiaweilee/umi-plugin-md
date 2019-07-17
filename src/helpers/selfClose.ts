const tags = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

export default function(html: string): string {
  const reg = new RegExp(`<s*(${tags.join('|')})s*>`, 'g');
  return html.replace(reg, '<$1 />');
}
