// @ts-check
import { defineConfig } from "astro/config";
import normalizeTrailingSlash from "@reunmedia/astro-normalize-trailing-slash";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  trailingSlash: "always",
  integrations: [normalizeTrailingSlash()],
});
