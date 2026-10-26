import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Change to '/' for eyad-amir.github.io; otherwise match your repository name.
export default defineConfig({
  plugins: [react()],
  base: "/eyad-amir-portfolio/",
});
