FROM python:3.12-alpine

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY index.html app.py ./
COPY css/ css/
COPY js/  js/

EXPOSE 8080

# Flask's built-in server; PORT comes from the environment (default 8080).
CMD ["python", "app.py"]
