import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        enter: path.resolve(__dirname, 'index.html'),
        main: path.resolve(__dirname, 'pages/main/index.html'),
        vacancy: path.resolve(__dirname, 'pages/vacancy/index.html'),
        vacancydetail: path.resolve(__dirname, 'pages/vacancy/detail/welder/index.html'),
        news: path.resolve(__dirname, 'pages/news/index.html'),
        contacts: path.resolve(__dirname, 'pages/contacts/index.html'),
        test: path.resolve(__dirname, 'pages/testing/index.html')
      },
    },
  },
  plugins: [
    vue(),
    pluginPurgeCss(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngquant()
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        autoprefixer,
      ],
    },
  },
})
