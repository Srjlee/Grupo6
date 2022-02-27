import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
    ],
  },
  plugins: [react()],
});
