import selfClose from './selfClose';

const cheerio = require('cheerio');
const stringHash = require('string-hash');

export default function(html: string, anchor: string[] | boolean): string {
  if (!html || !Array.isArray(anchor)) {
    return html;
  }

  const $ = cheerio.load(html);

  anchor.forEach(_ => {
    $(_).each(function() {
      const hash = stringHash($(this).text());
      $(this).attr(id, hash);
      $(this).prepend(`<a class="anchor" href="#${hash}" />`);
    });
  });

  return selfClose($.html());
}
