FROM node:20-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g opencode-ai

COPY script.js /app/script.js

WORKDIR /app

EXPOSE 3000

CMD ["node", "script.js"]
