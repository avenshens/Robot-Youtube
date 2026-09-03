import http from 'http';
import { exec } from 'child_process';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/lancer-zelda') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end("🤖 Robot activé ! Regardez l'onglet 'Logs' sur Render pour voir le travail en direct.\n");

    console.log("🎮 [CLIC] Déclenchement de la création du Short Zelda...");
    
    // Lance la commande OpenCode proprement via un processus séparé
    exec('opencode run --model openrouter/anthropic/claude-3.5-sonnet "Écris un script de Short de moins de 50 secondes sur un secret de The Legend of Zelda. Trouve des vidéos gaming/tech sur Pexels et monte le tout en vertical (9:16) nommé zelda_short.mp4 avec FFmpeg."', (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Erreur d'exécution : ${error.message}`);
        return;
      }
      console.log(`📋 Résultat du robot :\n${stdout}`);
    });

  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end("Le serveur du robot est allumé ! Pour lancer la création de la vidéo, ajoutez '/lancer-zelda' à la fin de l'URL dans votre barre d'adresse.\n");
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Serveur en attente sur le port ${port}`);
});
