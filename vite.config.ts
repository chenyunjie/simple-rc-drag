import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import typescript from '@rollup/plugin-typescript';

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  build: {
    outDir: 'lib',
    cssTarget: 'chrome61',
    lib: {
      // 组件库源码的入口文件
      entry: resolve('src/index.tsx'),
      name: 'simple-rc-drag',
      fileName: 'simple-rc-drag',
    },

    rollupOptions: {
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },

  plugins: [
    react(),
    typescript({
      target: 'es5',
      rootDir: resolve('src/'),
      declaration: true,
      declarationDir: resolve('lib'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
    }),
  ]
})
