import { defineConfig } from "vite"
import dns from "dns"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
    open: "/",
  },
})
