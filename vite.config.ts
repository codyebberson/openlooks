import mdxRollup from '@mdx-js/rollup';
import vercel from 'solid-start-vercel';
import solid from 'solid-start/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      ...(mdxRollup({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
      }) as any),
      enforce: 'pre',
    },
    solid({
      extensions: ['.mdx', '.md'],
      adapter: vercel(),
    }),
  ],
});
