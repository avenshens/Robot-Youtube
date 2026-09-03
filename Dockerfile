FROM node:20-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g opencode-ai

WORKDIR /app

EXPOSE 3000

CMD ["opencode", "serve", "--port", "3000", "--hostname", "0.0.0.0"]
