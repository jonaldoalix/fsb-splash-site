# FSB Splash Site (Archived)

Historical Styleshout FLARE + Vite/React login splash page built for Full Stack Boston (2024).

Superseded by the Next.js [fullstackboston.com](https://fullstackboston.com) site. Kept for reference with CI gates (lint, vitest 100%, OSV, Semgrep).

**Live museum demo:** https://splash.fullstackboston.com (private repo; public URL). Banner + `noindex`; login is stubbed/disabled.

```bash
npm ci
npm run lint:prod
npm run test:coverage
npm run build
```

Deploy (fsb-03 Dockge):

```bash
rsync -az --omit-dir-times --exclude .git --exclude node_modules --exclude dist \
  /opt/fsb/data/repos/fsb-splash-site/ fsb-03:/opt/stacks/fsb-splash-site/
ssh fsb-03 "cd /opt/stacks/fsb-splash-site && docker compose up -d --build"
```
