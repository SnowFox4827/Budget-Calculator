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

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

Light and dark "paper & envelopes" themes with a sliding toggle (persisted in
`localStorage`).
