# Whiplash

A self-contained SDE interview prep site covering High Level Design, Low Level Design, and key concepts. No build step — everything is plain HTML/CSS/JS.

## Running locally

**Option 1 — plain browser (read-only)**

Open `index.html` directly in any browser. All pages work without a server.

**Option 2 — dev server (recommended)**

The dev server enables the live-edit panel: type a change request directly in the browser and it gets applied automatically.

Requirements: Python 3 (no extra packages needed).

```bash
cd Whiplash
python3 server.py
```

Then open [http://localhost:3000](http://localhost:3000).

Every page gets a floating **Claude Edit** panel at the bottom-right — type what you want changed and hit Send. Progress tracking (Mark Done buttons) also appears on every page.

## Structure

```
index.html              # Home — links to HLD, LLD, Concepts
hld-index.html          # 16 High Level Design walkthroughs
lld-index.html          # LLD problem set
concepts-index.html     # 12 foundational concept pages
server.py               # Local dev server (Python stdlib only)
```

## Progress tracking

Click **Mark Done** (bottom-left of any page) to mark it complete. Progress is saved in `localStorage` and reflected as badges on the index pages — no account needed.
