import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        timeline: resolve(__dirname, "timeline.html"),
        criteria: resolve(__dirname, "criteria.html"),
        "ai-policy": resolve(__dirname, "ai-policy.html"),
        why: resolve(__dirname, "why.html"),
        themes: resolve(__dirname, "themes.html"),
        prizes: resolve(__dirname, "prizes.html"),
      },
    },
  },
});