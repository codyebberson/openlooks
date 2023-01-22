// /// <reference types="vitest" />
// import { defineConfig } from 'vite';
// import solidPlugin from 'vite-plugin-solid';

// export default defineConfig({
//   plugins: [solidPlugin()],
//   server: {
//     port: 3009,
//   },
//   build: {
//     target: 'esnext',
//     // lib: {
//     //   entry: './src/index.ts',
//     //   name: 'openlooks',
//     //   fileName: 'openlooks',
//     // },
//     // rollupOptions: {
//     //   external: ['solid-js', 'solid-js/web'],
//     //   output: {
//     //     globals: {
//     //       'solid-js': 'solid',
//     //       'solid-js/web': 'solid',
//     //     },
//     //   },
//     // },
//   },
//   test: {
//     globals: true,
//   },
//   css: {
//     modules: {
//       generateScopedName: 'openlooks-[name]-[local]',
//     },
//   },
// });

import mdxRollup from '@mdx-js/rollup';
import solid from 'solid-start/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // {
    //   ...(await import("@mdx-js/rollup")).default({
    //     jsx: true,
    //     jsxImportSource: "solid-js",
    //     providerImportSource: "solid-mdx",
    //   }),
    //   enforce: "pre",
    // },
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
    }),
  ],
});
