import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // Permite usar test(), expect() sem importar
    environment: "jsdom", // Simula o DOM para testes em React
    setupFiles: "./src/test-setup.ts", // Arquivo de setup para Jest matchers
  },
} as UserConfigExport);
