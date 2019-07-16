import selfClose from './selfClose';

const cheerio = require('cheerio');
const sh = require('shorthash');

export default function(html: string, anchor: string[] | boolean): string {
  if (!html || !Array.isArray(anchor)) {
    return html;
  }

  const $ = cheerio.load(html);

  anchor.forEach(_ => {
    $(_).each(function() {
      const hash = sh.unique($(this).text());
      $(this).attr('id', hash);
      $(this).prepend(`<a class="anchor" href="#${hash}" />`);
    });
  });

  return selfClose($.html());
}
