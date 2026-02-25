import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json" assert { type: "json" };

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${pkg.name}/`,
});
