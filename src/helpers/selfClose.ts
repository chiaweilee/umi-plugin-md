export default function(html: string): string {
  [
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
  ].forEach(function(tag) {
    const regex = new RegExp(`<(${tag}[^>]*?)>`, 'g');
    html = html.replace(regex, function(_, str) {
      if (str.endsWith('/')) {
        return `<${str}>`;
      } else {
        return `<${str} />`;
      }
    });
  });
}
