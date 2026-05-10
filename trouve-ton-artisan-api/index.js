require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
];

app.use(cors({
  origin: function (origin, callback) {
    // autorise localhost
    if (!origin) return callback(null, true);

    // autorise Vercel (tous les déploiements)
    if (origin.endsWith(".vercel.app")) {
      return callback(null, true);
    }

    // ou ton domaine exact prod si tu en as un
    return callback(new Error("Not allowed by CORS"));
  }
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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});