FROM node:20-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g opencode-ai

# Copie le script d'écoute dans la machine
COPY serveur.js /app/serveur.js

EXPOSE 10000

# Lance le serveur web d'écoute
CMD ["node", "serveur.js"]
