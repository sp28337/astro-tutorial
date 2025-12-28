// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial-sp28337.netlify.app/",
  vite: {    
    plugins: [tailwindcss()],  
  },
});
