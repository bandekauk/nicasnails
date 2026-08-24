# Nica's Nails & Waxing — website

A single-page Next.js (App Router) site. Home-studio nail & waxing service, Exeter.

## Edit everything in one place
Open **`lib/site.config.js`** and fill in the real values:
- `fresha` — Nica's Fresha booking URL (every "Book" button uses it)
- `phoneDisplay` / `phoneTel` — dedicated line, not a personal mobile
- `instagramUrl` / `instagramHandle`
- `email`
- `nails` / `waxing` — confirm the prices (currently Devon ballparks)
- `gallery` — see below

## Gallery photos (do this before launch)
1. Drop images into **`/public`** (e.g. `work-01.jpg`).
2. List them in `site.config.js`:
   ```js
   gallery: [
     { src: "/work-01.jpg", alt: "Gel manicure in soft pink" },
     { src: "/work-02.jpg", alt: "French tips" },
   ],
   ```
Leave `gallery: []` and it shows placeholder tiles. An empty gallery on a
nail site kills trust — get 6+ real shots in first.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel
- **Git route:** push this folder to a GitHub repo, then "Import Project" in Vercel. Auto-deploys on every push.
- **CLI route:** `npm i -g vercel` then `vercel` (preview) / `vercel --prod`.

Add your domain in Vercel → Settings → Domains, then point DNS. HTTPS is automatic.

## ⚠️ Editing warning
Edit files **locally** and push the finished result. Do **not** edit in
GitHub's web editor — it strips anchor tags and you'll lose the booking links.

## Pre-launch checklist
- [ ] Fresha page live, URL in config
- [ ] 6+ real gallery photos
- [ ] Prices confirmed
- [ ] Phone / Instagram / email filled
- [ ] Public liability + treatment insurance in place (working-from-home cover)
