FROM node:20-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# On installe le package localement dans le dossier de travail
RUN npm install opencode-ai

COPY script.js /app/script.js

CMD ["node", "script.js"]
