export default function loader(source: string) {
  return require('@babel/core').transformSync(source, {
    plugins: ['@babel/plugin-transform-react-jsx'],
    babelrc: false,
    configFile: false,
  }).code;
}
