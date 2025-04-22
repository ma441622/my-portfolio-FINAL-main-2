import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-portfolio-FINAL/",
  plugins: [react()],
  server: {
    allowedHosts: ["dfhjz4-5173.csb.app"],
  },
});
