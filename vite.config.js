import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          '%VITE_GOOGLE_SITE_VERIFICATION%',
          process.env.VITE_GOOGLE_SITE_VERIFICATION
        );
      }
    }],
})
