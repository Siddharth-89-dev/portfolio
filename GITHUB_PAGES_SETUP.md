# GitHub Pages deployment

This repository is configured as a **static Vite + React + TanStack Router SPA** for GitHub Pages.

Live URL:

https://siddharth-89-dev.github.io/portfolio/

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The deployable static site is generated in:

```text
dist/
  index.html
  assets/
```

## GitHub Pages

1. Push to `main`.
2. GitHub Actions builds the project.
3. The workflow uploads `dist/` as the Pages artifact.
4. GitHub Pages deploys it automatically.

In GitHub:

**Settings → Pages → Source → GitHub Actions**

The Vite base path and TanStack Router base path are both set to `/portfolio`, so assets and routing work correctly from the repository URL.

No server or Node runtime is required by GitHub Pages.
