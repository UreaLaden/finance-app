import { defineConfig } from "vite";
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "src"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/utils/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@classes": path.resolve(__dirname, "src/classes"),
      "@helpers": path.resolve(__dirname, "src/utils/helpers"),
    }
  }
});
