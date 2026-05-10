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

    await mailService.sendMail({
      from: process.env.EMAIL_USER,
      to: artisan.email,
      replyTo: { email: email, name: name || "Utilisateur" },
      subject,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur envoi email" });
  }
};
