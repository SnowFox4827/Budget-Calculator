# Budget Calculator

A standalone web app with two financial calculators, extracted from the
[Budget](https://github.com/SnowFox4827/Budget) envelope-budgeting app:

- **Compound Interest Calculator** — principal, annual rate, time, optional
  monthly contributions and compounding frequency. Shows the final amount and
  interest earned, plus a year-by-year growth curve (Chart.js) with milestone
  markers you can toggle.
- **Mortgage Calculator** — home value, down payment ($ / % auto-sync), loan
  term, interest rate, property tax, insurance and HOA. Shows a monthly-payment
  breakdown, a full-loan "adds up" total, an "Affordability (25% rule)" check
  against your take-home pay, and Balance / Breakdown / Amortization views with
  a Chart.js balance-over-time curve.

## Stack

Pure static frontend: HTML, CSS and vanilla JS (classic scripts, works over
`file://`), Chart.js v4.4.1 and its annotation plugin bundled locally, no build
step. Served by Flask inside Docker.

## Run

**Docker (recommended):**

1. Copy the example env file and pick a port:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and set `PORT` to whatever you want (any free port —
   e.g. `PORT=8080`, `PORT=3000`, or `PORT=80`). This is the port the app
   will be served on.

2. Build and start:

   ```bash
   docker compose up -d --build
   ```

3. Visit `http://localhost:<PORT>` — e.g. `http://localhost:8080` if you
   left the default.

Changing the port later: edit `PORT` in `.env`, then rerun
`docker compose up -d --build`.

**Local, no install:** open `index.html` directly in a browser, or:

```bash
pip install -r requirements.txt
PORT=8080 python app.py        # then visit http://localhost:8080
```

(Plain `python3 -m http.server` also works if you don't want Flask.)

Light and dark themes with a sliding toggle (persisted in
`localStorage`).
