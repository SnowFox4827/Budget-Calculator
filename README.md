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

### Docker (recommended)

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

### Using python3 ./app.py

Run the Flask server directly on your host — no Docker needed.

1. Install the dependencies (Flask, from `requirements.txt`):

   ```bash
   pip install -r requirements.txt
   ```

2. Start the app, optionally picking a port (defaults to 8080):

   ```bash
   PORT=8080 python3 ./app.py
   ```

3. Visit `http://localhost:<PORT>` — e.g. `http://localhost:8080`.

On Windows, set the port inline instead of exporting it:

```bat
set PORT=8080
python3 .\app.py
```

Stop the server with `Ctrl+C`. If Flask isn't installed, `python3 -m
http.server` from the project directory also works (the app is pure static
frontend and works over `file://` too — just open `index.html`).

Light and dark themes with a sliding toggle (persisted in
`localStorage`).
