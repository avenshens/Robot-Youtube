FROM node:20-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g opencode-ai

# Passage sur Claude 3.5 Sonnet (Le modèle de référence absolu pour OpenCode)
CMD ["opencode", "run", "--model", "openrouter/anthropic/claude-3.5-sonnet", "Écris un script de moins de 50 secondes pour un Short YouTube sur un secret de The Legend of Zelda. Trouve des vidéos libres de droits sur le gaming ou la tech sur Pexels, et assemble le tout en une vidéo verticale (9:16) nommée zelda_short.mp4 avec FFmpeg."]
