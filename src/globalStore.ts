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
  // eslint-disable-next-line no-var
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
