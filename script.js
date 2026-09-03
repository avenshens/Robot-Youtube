import { OpenCodeAgent } from 'opencode-ai';

async function genererShortZelda() {
  const agent = new OpenCodeAgent();

  console.log("🎮 Début de la création du Short Gaming...");

  // 1. Demande à l'IA d'écrire le script du Short
  const scriptGaming = await agent.generateText({
    prompt: "Écris un script court (moins de 50 secondes) pour un Short YouTube. Le thème est : 'Une astuce ou un secret incroyable caché dans un jeu vidéo (priorité à la saga The Legend of Zelda)'. Le ton doit être dynamique, mystérieux et captivant pour les geeks. Donne des instructions claires sur le visuel nécessaire.",
    model: "openrouter/auto" 
  });

  console.log("📝 Script généré par l'IA :\n", scriptGaming);

  // 2. Recherche automatique de visuels sur Pexels
  console.log("🔍 Recherche de clips d'illustration en cours...");
  const videos = await agent.searchPexels({
    query: "gaming room neon controller retro technology", // Pexels n'a pas Zelda (droits d'auteur), on prend une ambiance geek/gaming de qualité
    per_page: 3
  });

  // 3. Montage vidéo avec FFmpeg
  console.log("🎬 Assemblage de la vidéo au format vertical (9:16)...");
  await agent.editVideo({
    inputClips: videos,
    format: "vertical",
    outputName: "short_zelda_final.mp4"
  });

  console.log("✅ Vidéo prête à l'envoi !");
}

genererShortZelda();
