# Feast Catering

Responsive catering website with menus, food photography, video, scroll effects and a lunch request planner.

## Deploy with GitHub and Vercel

Upload this folder's contents to a GitHub repository, preserving the `dist` folder. Import that repository in Vercel.

- Framework: Other
- Root directory: repository root
- Build command: blank
- Install command: blank
- Output directory: dist
- Environment variables: none

The included vercel.json configures these settings. Each application route has an index.html so direct page visits work.

## Local preview

Run `python3 -m http.server 8000 --directory dist`, then visit http://localhost:8000.

## Editing

- dist/app.js: page content, request calculations and local staff workspace
- dist/collections.js: menu categories and general pages
- dist/planner.js and dist/planner.css: homepage lunch planner
- dist/header.js and dist/header.css: navigation
- dist/wow.js: scroll effects and video
- dist/style.css: main styles
- dist/images and dist/video: bundled media

Keep the shared HTML shell consistent across all route folders when editing navigation, scripts or stylesheets.

## Current behavior

Requests and staff status changes are held in browser memory and reset on refresh. Enquiries and lunch briefs are prepared for manual copying into email. No automatic email delivery, database, payment service or authenticated staff portal is connected. The /staff route is a local workspace and is not access-controlled. Menu pricing and availability require confirmation by the catering team.

See ASSETS.md for media attribution and CONTENT_SOURCES.md for content references.
