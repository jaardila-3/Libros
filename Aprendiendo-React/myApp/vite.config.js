import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, //evita utilizar en cada archivo el: import { describe, it, expect } from "vitest";
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
