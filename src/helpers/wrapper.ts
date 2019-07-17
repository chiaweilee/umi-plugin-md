const isPlainObject = require('lodash/isPlainObject');

interface Ext {
  className?: string;
  style?: object;
}

export default function(source: string, wrapper: string, extend: Ext): string {
  let extendString = ` dangerouslySetInnerHTML={{ __html: \`${source}\` }}`;

  if (typeof extend.className === 'string') {
    extendString += ' className="'.concat(extend.className, '"');
  }

  if (isPlainObject(extend.style)) {
    // @ts-ignore
    extendString += ' style={'.concat(JSON.stringify(extend.style), '}');
  }

  return `<${wrapper.concat(extendString)} />`;
}
