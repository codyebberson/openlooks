/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3009,
  },
  build: {
    target: 'esnext',
    // lib: {
    //   entry: './src/index.ts',
    //   name: 'openlooks',
    //   fileName: 'openlooks',
    // },
    // rollupOptions: {
    //   external: ['solid-js', 'solid-js/web'],
    //   output: {
    //     globals: {
    //       'solid-js': 'solid',
    //       'solid-js/web': 'solid',
    //     },
    //   },
    // },
  },
  test: {
    globals: true,
  },
  css: {
    modules: {
      generateScopedName: 'openlooks-[name]-[local]',
    },
  },
});
