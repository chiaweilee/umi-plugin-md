import markdown from './markdown';
import replaceArchor from './replaceArchor';
import buildWrapper from './buildWrapper';

function replaceJSX(source: string): string {
  return source.replace(/([{}])/g, "{'$1'}");
}

interface Opt {
  markdown: object;
  anchor: string[] | boolean;
  wrapper: string;
  className: string;
  style: object;
}

export default function(source: string, options: Opt): string {
  source = markdown(source, options.markdown);
  source = replaceArchor(source, options.anchor);
  source = replaceJSX(source);
  source = buildWrapper(source, options.wrapper, {
    className: options.className,
    style: options.style,
  });

  return source;
}
