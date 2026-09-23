import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: "./" makes every asset path relative, so the built site works in
// public_html or in any subfolder on cPanel without changes.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
