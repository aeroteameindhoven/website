import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://aeroteameindhoven.nl",
  output: "static",
  compressHTML: true,
});
