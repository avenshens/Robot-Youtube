FROM node:20-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g opencode-ai

CMD ["opencode", "run", "Écris un script dynamique de moins de 50 secondes pour un Short YouTube sur un secret ou une astuce cachée dans The Legend of Zelda. Trouve des vidéos d'illustration sur le gaming ou la tech sur Pexels, et assemble le tout en une vidéo verticale (9:16) nommée zelda_short.mp4 avec FFmpeg."]
