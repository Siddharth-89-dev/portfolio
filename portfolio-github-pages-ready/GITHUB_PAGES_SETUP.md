# GitHub Pages deployment

This project is configured for GitHub Pages at:

https://siddharth-89-dev.github.io/portfolio/

## Local test

```bash
npm install
npm run build
```

The static deployment output is generated under `.output/public`.

## GitHub

In **Settings → Pages**, set **Source** to **GitHub Actions**.

Every push to `main` will build and deploy the portfolio automatically.
