require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const app = express();
app.set("trust proxy", 1);
const PORT = process.env.PORT || 3000;

//* Helmet ajoute automatiquement plusieurs en-têtes HTTP de sécurité pour protéger l'application contre les vulnérabilités courantes.

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
  })
);

//* CORS : Configure les règles de partage des ressources entre origines pour permettre à l'application front-end d'accéder à l'API tout en limitant les accès non autorisés.

app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = [process.env.FRONTEND_URL, "http://localhost:5173"];

      if (!origin || allowed.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
  }),
);

app.use(express.json());

const sequelize = require("./db");

sequelize
  .authenticate()
  .then(() => console.log("Connexion MySQL OK"))
  .catch((err) => console.error("Erreur de connexion :", err));

app.use("/images", express.static("public/images"));

//* Limiteur de taux : Limite le nombre de requêtes qu'un client peut faire à l'API dans une période donnée pour prévenir les abus et les attaques par déni de service (DoS).

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: {
    error: "Trop de requêtes, réessayez plus tard.",
  },
});

app.use("/api", limiter);

app.use("/api", (req, res, next) => {
  res.set("Cache-Control", "public, max-age=60");
  next();
});

const artisanRoutes = require("./routes/artisanRoutes");
app.use("/api/artisans", artisanRoutes);

const categorieRoutes = require("./routes/categorieRoutes");
app.use("/api/categories", categorieRoutes);

const homeRoutes = require("./routes/homeRoutes");
app.use("/api/home", homeRoutes);

app.get("/", (req, res) => {
  res.send("API fonctionne !");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
