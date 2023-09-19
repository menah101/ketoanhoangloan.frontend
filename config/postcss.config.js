const is_prod = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: is_prod ? [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ] : [
    require('autoprefixer'),
  ],
}
