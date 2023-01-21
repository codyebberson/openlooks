import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssEach from 'postcss-each';

const config = {
  plugins: [postcssEach(), autoprefixer(), cssnano({ preset: 'default' })],
};

export default config;
