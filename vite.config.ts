import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use 'sass:color';
        @use 'sass:math';
        @use '@/styles/base/_variables.scss' as v;
        @use '@/styles/base/_mixins.scss' as m;
        @use '@/styles/base/_themes.scss' as t;
        @use '@/styles/base/_animations.scss' as a;
        `,
      },
    },
  },
})