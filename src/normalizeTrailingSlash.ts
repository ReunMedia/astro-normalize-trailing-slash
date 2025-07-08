import globalStore from "./globalStore";

/**
 * Normalizes trailing slash according to Astro's `trailingSlash` configuration.
 */
export function normalizeTrailingSlash(path: string): string {
  // If path is an absolute URL instead of relative path, normalization should
  // only apply to current Astro site.
  if (URL.canParse(path) && !path.startsWith(globalStore.site ?? "")) {
    return path;
  }

  if (globalStore.trailingSlash === "always" && !path.endsWith("/")) {
    path += "/";
  } else if (globalStore.trailingSlash === "never" && path.endsWith("/")) {
    path = path.substring(0, path.length - 1);
  }
  return path;
}
