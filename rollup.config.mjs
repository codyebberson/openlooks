import postcss from 'rollup-plugin-postcss';
import withSolid from 'rollup-preset-solid';

export default withSolid({
  input: 'src/index.ts',
  targets: ['esm'],
  plugins: [postcss({ extract: 'styles.css' })],
});
