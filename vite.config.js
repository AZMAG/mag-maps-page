import { defineConfig } from "vite";
import dns from "dns";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "./",
    server: {
        host: "localhost",
        port: 3000,
        open: true,
    },
});
