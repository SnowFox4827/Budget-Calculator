FROM python:3.12-alpine

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY index.html app.py ./
COPY css/ css/
COPY js/  js/

# Flask reads PORT itself (default 8080) and gunicorn passes it through.
EXPOSE ${PORT:-8080}
ENV PORT=${PORT:-8080}

CMD exec gunicorn --bind 0.0.0.0:${PORT:-8080} --workers 2 app:app
