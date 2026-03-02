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

const sequelize = require('./db');

sequelize.authenticate()
  .then(() => console.log('Connexion MySQL OK'))
  .catch(err => console.error('Erreur de connexion :', err));

const artisanRoutes = require('./routes/artisanRoutes');
app.use('/api/artisans', artisanRoutes);

const categorieRoutes = require('./routes/categorieRoutes');
app.use('/api/categories', categorieRoutes);