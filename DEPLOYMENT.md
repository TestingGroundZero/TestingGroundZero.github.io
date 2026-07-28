# Publishing guide

## GitHub Pages

1. Create a repository and place the site files at its top level.
2. Push the files to the default branch.
3. In the repository settings, open **Pages**.
4. Select deployment from the branch and choose the root folder.
5. Save the setting.

For `thegospel.ca`, rename `CNAME.example` to `CNAME` before publishing.

## Apache, Nginx, Caddy, or shared hosting

Upload the complete contents of this folder to the public web directory. The home page is `index.html`, and the custom missing-page document is `404.html`.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
