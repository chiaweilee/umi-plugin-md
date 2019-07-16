import renderHighlight from './renderHighlight';

export default function(source: string, options = {} as object): string {
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
}
