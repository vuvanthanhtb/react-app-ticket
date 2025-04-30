import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      common: path.resolve(__dirname, './src/common/'),
      modules: path.resolve(__dirname, './src/modules/'),
      pages: path.resolve(__dirname, './src/pages/'),
      utils: path.resolve(__dirname, './src/utils/'),
      assets: path.resolve(__dirname, './src/assets/'),
      app: path.resolve(__dirname, './src/app/'),
      layout: path.resolve(__dirname, './src/layout/'),
      services: path.resolve(__dirname, './src/services/'),
      redux: path.resolve(__dirname, './src/redux/'),
      routesConfig: path.resolve(__dirname, './src/routes-config/'),
    },
  },
})
