module.exports = {
  plugins: [
    require('postcss-each'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
