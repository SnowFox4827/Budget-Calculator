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

Pure static frontend: HTML, CSS and vanilla JS (ES Modules), Chart.js v4.4.1
bundled locally, no build step, no backend.

## Run

**Local, no install:** open `index.html` directly in a browser, or:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

**Docker:**

```bash
docker compose up -d --build
```

The port is set in `.env` (`PORT=8080` by default — change it, then restart
with `docker compose up -d --build`). The app is at
`http://localhost:<PORT>`.

Light and dark "paper & envelopes" themes with a sliding toggle (persisted in
`localStorage`).
