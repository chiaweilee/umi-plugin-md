export default {
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
