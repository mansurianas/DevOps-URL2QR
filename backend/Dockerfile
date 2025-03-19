# Stage 1: Builder with temporary build environment
FROM python:3.9-slim AS builder

WORKDIR /app
COPY requirements.txt .

# Create virtual environment
RUN python -m venv /app/venv
ENV PATH="/app/venv/bin:$PATH"

# Install Python dependencies
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt


# Stage 2: Minimal runtime image
FROM python:3.9-slim

WORKDIR /app

# Install only Pillow's runtime dependencies (reduces image size by ~50MB+ vs build deps)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libjpeg62-turbo \
    zlib1g \
    libfreetype6 \
    libpng16-16 \
    && rm -rf /var/lib/apt/lists/*

# Copy virtual environment from builder
COPY --from=builder /app/venv /app/venv

# Copy application code
COPY . .

# Use virtual environment
ENV PATH="/app/venv/bin:$PATH"


# Expose port and start application
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]