# Portfolio

Static site, no build step. Plain HTML and CSS.

## Publish on GitHub Pages
1. Create a repo named `your-username.github.io` (or any name) and upload everything in this folder to the root.
2. Repo Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site goes live at `https://your-username.github.io/` (or `/repo-name/` for a project repo; relative links work either way).

## Add your domain later
1. Settings → Pages → Custom domain → enter it (this creates a `CNAME` file).
2. At your registrar, add the DNS records GitHub lists (A records for the apex domain, CNAME `www` → `your-username.github.io`).
3. Tick "Enforce HTTPS" once the certificate is issued.

## Editing
Search each page for `EDIT` comments. Replace `VIDEO_ID`, the email, profile links and photo files.
