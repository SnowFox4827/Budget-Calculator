"""Flask server for the Budget Calculator static site.

Serves index.html and the css/js assets. The port comes from the
PORT environment variable (default 8080), set in .env for docker compose.
"""
import os

from flask import Flask, send_from_directory

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=None)


@app.route("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/<path:path>")
def assets(path):
    # Serve css/, js/ and anything else that exists on disk; everything
    # else falls back to index.html so deep links still load.
    full = os.path.join(BASE_DIR, path)
    if os.path.isfile(full):
        return send_from_directory(BASE_DIR, path)
    return send_from_directory(BASE_DIR, "index.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
