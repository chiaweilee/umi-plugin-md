import markdown from './markdown';
import anchor from './anchor';
import wrapper from './wrapper';
import encode from './encode';

interface Opt {
  markdown: object;
  anchor: string[] | boolean;
  wrapper: string;
  className: string;
  style: object;
}

export default function(source: string, options: Opt): string {
  source = markdown(source, options.markdown);
  source = anchor(source, options.anchor);
  source = encode(source);
  source = wrapper(source, options.wrapper, {
    className: options.className,
    style: options.style,
  });

  return source;
}
