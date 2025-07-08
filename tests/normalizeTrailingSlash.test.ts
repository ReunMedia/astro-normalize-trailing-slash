import { expect, test, describe, it, beforeEach } from "bun:test";
import globalStore from "../src/globalStore";
import { normalizeTrailingSlash } from "../src";

describe("Trailing slash ignore", () => {
  beforeEach(() => {
    globalStore.trailingSlash = "ignore";
  });

  it("should not normalize internal relative paths", () => {
    globalStore.site = "";

    const tests = {
      "/test": "/test",
      "/test/": "/test/",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });

  it("should not normalize internal absolute paths", () => {
    globalStore.site = "https://example.com";

    const tests = {
      "https://example.com/test": "https://example.com/test",
      "https://example.com/test/": "https://example.com/test/",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });

  it("should not normalize external absolute paths", () => {
    globalStore.site = "https://example.com";

    const tests = {
      "https://reun.eu/en": "https://reun.eu/en",
      "https://reun.eu/en/": "https://reun.eu/en/",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });
});

describe("Trailing slash always", () => {
  beforeEach(() => {
    globalStore.trailingSlash = "always";
  });

  it("should normalize internal relative paths", () => {
    globalStore.site = "";

    const tests = {
      "/test": "/test/",
      "/test/": "/test/",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });

  it("should normalize internal absolute paths", () => {
    globalStore.site = "https://example.com";

    const tests = {
      "https://example.com/test": "https://example.com/test/",
      "https://example.com/test/": "https://example.com/test/",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });

  it("should not normalize external absolute paths", () => {
    globalStore.site = "https://example.com";

    const tests = {
      "https://reun.eu/en": "https://reun.eu/en",
      "https://reun.eu/en/": "https://reun.eu/en/",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });
});

describe("Trailing slash never", () => {
  beforeEach(() => {
    globalStore.trailingSlash = "never";
  });

  it("should normalize internal relative paths", () => {
    globalStore.site = "";

    const tests = {
      "/test": "/test",
      "/test/": "/test",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });

  it("should normalize internal absolute paths", () => {
    globalStore.site = "https://example.com";

    const tests = {
      "https://example.com/test": "https://example.com/test",
      "https://example.com/test/": "https://example.com/test",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });

  it("should not normalize external absolute paths", () => {
    globalStore.site = "https://example.com";

    const tests = {
      "https://reun.eu/en": "https://reun.eu/en",
      "https://reun.eu/en/": "https://reun.eu/en/",
    };

    for (const [original, normalized] of Object.entries(tests)) {
      expect(normalizeTrailingSlash(original)).toBe(normalized);
    }
  });
});
