/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["./__test__/**/*.{js,ts,jsx,tsx}"],
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src'),
      '@test': path.resolve(__dirname, './__test__')
    },
  },
});
