require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

const sequelize = require('./db');

sequelize.authenticate()
  .then(() => console.log('Connexion MySQL OK'))
  .catch(err => console.error('Erreur de connexion :', err));

app.use('/images', express.static('public/images'));

const artisanRoutes = require('./routes/artisanRoutes');
app.use('/api/artisans', artisanRoutes);

const categorieRoutes = require('./routes/categorieRoutes');
app.use('/api/categories', categorieRoutes);

app.get('/', (req, res) => {
  res.send('API fonctionne !');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});