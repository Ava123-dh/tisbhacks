import { defineConfig } from "vite";

export default defineConfig({
  base: "/tisbhacks/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
