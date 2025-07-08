# Astro Normalize Trailing Slash

A simple utility to normalize trailing slashes in URLs to match Astro project's
`trailingSlash` config option. Especially useful when working with a CMS and not
having to worry about adding or removing `/` at the end of every link.

## Installation

### Install package

Using `astro add`:

```sh
pnpm astro add @reunmedia/astro-normalize-trailing-slash
```

Manually:

```sh
pnpm add @reunmedia/astro-normalize-trailing-slash
```

### Enable integration

```mjs
// astro.config.mjs
import { defineConfig } from "astro/config";
import normalizeTrailingSlash from "@reunmedia/astro-normalize-trailing-slash";

export default defineConfig({
  // Site option is used to determine which absolute URLs to normalize
  site: "https://example.com",
  trailingSlash: "always",
  integrations: [normalizeTrailingSlash()],
});
```

## Usage

```astro
---
import { normalizeTrailingSlash } from "@reunmedia/astro-normalize-trailing-slash";
---

{
  pages.map((page) => (
    <a href={normalizeTrailingSlash(page.slug)}>{page.title}</a>
  ))
}
```

Passing a URL or a path to `normalizeTrailingSlash` ensures the resulting URL
either ends or doesn't end with `/` based on your [`trailingSlash` config
option](https://docs.astro.build/en/reference/configuration-reference/#trailingslash).
It only affects relative or absolute URLs of your own site, so you can safely
pass any URL to it.

For example let's assume your `site` is set to `https://mysite.com` and
`trailingSlash` is `always`. Here's how paths would be normalized:

| Original                  | Normalized                |
| ------------------------- | ------------------------- |
| /news                     | /news/                    |
| /news/                    | /news/                    |
| https://mysite.com/blog   | https://mysite.com/blog/  |
| https://example.com/about | https://example.com/about |
