import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss"
import {resolve} from "path";

export default defineConfig(({command}) => {
  let serveOptions = {};
  if (command === "serve") {
    //開発環境設定
    const serveOptions = {
      server: {
        // port: 8000,
      },
    };
  }
  //本番環境設定
  return {
    ...serveOptions,
    root: './src',
    publicDir: '../public',
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          about: resolve(__dirname, 'src/about/index.html')
        }
      }
    },
    css: {
      postcss: {
        plugins: [autoprefixer, tailwindcss],
      },
    }
  };
})
;
