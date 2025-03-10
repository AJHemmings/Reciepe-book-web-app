import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "school-of-code-70",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "school-of-code-70",
    project: "web-app"
  })],

  build: {
    sourcemap: true
  }
})