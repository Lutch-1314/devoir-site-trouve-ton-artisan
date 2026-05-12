require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
  })
);

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

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: {
    error: "Trop de requêtes, réessaie plus tard.",
  },
});

app.use("/api", limiter);

const artisanRoutes = require("./routes/artisanRoutes");
app.use("/api/artisans", artisanRoutes);

const categorieRoutes = require("./routes/categorieRoutes");
app.use("/api/categories", categorieRoutes);

app.get("/", (req, res) => {
  res.send("API fonctionne !");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
