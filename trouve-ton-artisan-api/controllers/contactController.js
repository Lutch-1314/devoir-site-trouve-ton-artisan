const artisanService = require("../services/artisanService");
const mailService = require("../services/mailService");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Email invalide" });
    }

    const artisanId = req.params.id;

    const artisan = await artisanService.getArtisanById(artisanId);

    if (!artisan) {
      return res.status(404).json({ error: "Artisan introuvable" });
    }

    console.log("EMAIL RECU =", email);
console.log("TYPE =", typeof email);

const cleanEmail = String(email).trim().toLowerCase();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(cleanEmail)) {
  return res.status(400).json({
    error: "Email invalide",
  });
}

 await mailService.sendMail({
  sender: {
    email: process.env.EMAIL_USER,
    name: "TrouveTonArtisan",
  },

  to: [
    {
      email: artisan.email,
    },
  ],

  replyTo: {
    email: cleanEmail,
    name: String(name).trim(),
  },

  subject: subject,

  textContent: `
Nom: ${name}
Email: ${cleanEmail}

Message:
${message}
  `,
});
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur envoi email" });
  }
};
