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
