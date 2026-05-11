const artisanService = require("../services/artisanService");
const mailService = require("../services/mailService");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const artisanId = req.params.id;

    const artisan = await artisanService.getArtisanById(artisanId);

    if (!artisan) {
      return res.status(404).json({ error: "Artisan introuvable" });
    }

    const cleanEmail = String(email).trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        error: "Email invalide",
      });
    }

    if (!options.replyTo || !options.to) {
      throw new Error("Missing email parameters");
    }

    await mailService.sendMail({
      to: process.env.EMAIL_USER,
      replyTo: cleanEmail,
      subject,
      name,
      message,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur envoi email" });
  }
};
