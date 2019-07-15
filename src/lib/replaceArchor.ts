import selfClose from './selfClose';

const cheerio = require('cheerio');

export default function(html: string, anchor: string[] | boolean): string {
  if (!html || !Array.isArray(anchor)) {
    return html;
  }

  const $ = cheerio.load(html);

  anchor.forEach(_ => {
    $(_).each(function() {
      const text = $(this).text();
      $(this).prepend(`<a id="${text}" href="#${text}">#</a>`);
    });
  });

  console.log($.html());

  return selfClose($.html());
}
