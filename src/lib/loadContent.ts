import markdown from './markdown';
import replaceArchor from './replaceArchor';
import buildWrapper from './buildWrapper';

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
  source = buildWrapper(source, options.wrapper, {
    className: options.className,
    style: options.style,
  });

  return source;
}
