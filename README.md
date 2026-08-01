# thegospel.ca

A lightweight static website sharing the Gospel of Jesus Christ and information about Gospel Hall assemblies and gatherings across Cape Breton, Nova Scotia.

## Contents

- Purpose-built home page
- Gospel presentation using the King James Version
- Complete Cape Breton assembly directory on one page
- Conference records in newest-first order, with direct audio links where available
- An easily updated Events page with local flyer images
- Central contact page
- Responsive navigation and light/dark colour themes
- Sitemap, web manifest, robots file, and custom 404 page

## Preview locally

From the site folder, run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Publish

The entire folder can be uploaded to any static web host. For GitHub Pages, commit the contents to the publishing branch and enable Pages in the repository settings.

To use a custom domain, copy `CNAME.example` to `CNAME` and place the domain name inside it.

## Updating events

Open `events.html` in a text editor. The event list contains clear `EVENT START` and `EVENT END` comments, along with editing notes directly above the list. Copy an entire event block to add another event, put the newest upcoming event first, and place flyer images in `assets/images/events/`.

The homepage contains a short featured-event panel. Update or remove that panel when the featured event changes.
