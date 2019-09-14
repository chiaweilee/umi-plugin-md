export default {
  base: '/umi-plugin-md/',
  publicPath: '/umi-plugin-md/',
  cssPublicPath: '/umi-plugin-md/',
  runtimePublicPath: true,
  outputPath: 'docs',
  chainWebpack(config) {
    config.plugins.delete('progress');
  },
  plugins: [
    [
      `${__dirname}/lib`,
      {
        wrapper: 'div',
        className: 'markdown-body',
        style: {
          padding: '30px',
        },
      },
    ],
  ],
};
