import type { AstroIntegration } from "astro";
import globalStore from "./globalStore";

const createPlugin = (): AstroIntegration => {
  return {
    name: "ogimages",
    hooks: {
      "astro:config:setup": ({ config }) => {
        globalStore.site = config.site ?? "";
        globalStore.trailingSlash = config.trailingSlash;
      },
    },
  };
};

export default createPlugin;
