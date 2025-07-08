import type { AstroConfig } from "astro";

interface GlobalStore {
  /**
   * `Astro.site` config option.
   */
  site: AstroConfig["site"];
  /**
   * `Astro.trailingSlash` config option.
   */
  trailingSlash: AstroConfig["trailingSlash"];
}

declare global {
  /**
   * Global variable that stores integration data.
   */
  var astroIntegrationNormalizeTrailingSlash: GlobalStore;
}

// Initialize global store
if (!globalThis.astroIntegrationNormalizeTrailingSlash) {
  globalThis.astroIntegrationNormalizeTrailingSlash = {
    site: "",
    trailingSlash: "ignore",
  };
}

const globalStore = globalThis.astroIntegrationNormalizeTrailingSlash;

export default globalStore;
