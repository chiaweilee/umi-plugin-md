export default {
  chainWebpack(config) {
    config.plugins.delete('progress');
  },
  plugins: [
    [
      `${__dirname}/lib`,
      {
        wrapper: 'div',
      },
    ],
  ],
};
