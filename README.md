# Trouve ton artisan

Application web permettant de rechercher des artisans dans la région Auvergne-Rhône-Alpes.

## Technologies utilisées

### Frontend

- React
- Vite
- Bootstrap
- Sass

### API

- Node.js
- Express
- Sequelize
- MySQL

## Prérequis

**Avant de lancer le projet, installer :**

- Node.js (version 18 ou supérieure)
- npm (installé automatiquement avec Node.js)
- MySQL

**Vérifier les versions :**

```bash
node -v
npm -v
```

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Lutch-1314/devoir-site-trouve-ton-artisan.git
cd devoir-site-trouve-ton-artisan
```

---

## Installation de l'API

**Se placer dans le dossier API :**

```bash
cd trouve-ton-artisan-api
```

**Installer les dépendances :**

```bash
npm install
```

**Créer un fichier `.env` :**

```env
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_HOST=localhost
DB_PORT=3306

EMAIL_USER=votre_email@gmail.com
EMAIL_PASS=votre_mot_de_passe_d_application

FRONTEND_URL=http://localhost:5173
```

EMAIL_PASS correspond à un mot de passe d’application Google généré depuis votre compte Gmail.
Exemple de configuration avec Gmail.
Un autre service SMTP peut être utilisé en adaptant la configuration Nodemailer.

**Créer une base de données MySQL :**

```bash
mysql -u root -p < database/mld.sql
mysql -u root -p trouve_ton_artisan < database/data.sql
```

Ou exécuter les fichiers SQL (dossier `database`) dans MySQL Workbench / phpMyAdmin.

**Lancer le serveur :**

```bash
npm run dev
```

**L'API sera disponible sur :**

```text
http://localhost:3000
```

---

## Installation du frontend

**Se placer dans le dossier frontend :**

```bash
cd trouve-ton-artisan-front
```

**Installer les dépendances :**

```bash
npm install
```

**Créer un fichier `.env` :**

```env
VITE_API_URL=http://localhost:3000
```

**Lancer le frontend :**

```bash
npm run dev
```

**Application disponible sur :**

```text
http://localhost:5173
```

---


## Déploiement

### Frontend
<https://devoir-site-trouve-ton-artisan.vercel.app>

### API
<https://devoir-site-trouve-ton-artisan-production.up.railway.app>

---

## Sécurité

L’API est sécurisée avec :

- CORS (restriction aux domaines autorisés)
- Helmet
- Rate limiting

---

## Validation

Le projet a été validé avec :

- W3C Markup Validation Service
- W3C CSS Validation Service

---

## Auteur

Lucie Aimar
Projet réalisé dans le cadre de ma formation développeur web.
