const express = require('express');
const app = express();
const PORT = 3000;

// Pour pouvoir lire les JSON dans les requêtes POST
app.use(express.json());

// Route test
app.get('/', (req, res) => {
    res.send('API fonctionne !');
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});