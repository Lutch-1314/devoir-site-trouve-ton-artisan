const SibApiV3Sdk = require("@getbrevo/brevo");

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY,
);

exports.sendMail = async (options) => {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = options.subject;
  sendSmtpEmail.textContent = options.text;

  sendSmtpEmail.sender = {
    name: "Trouve ton artisan",
    email: process.env.EMAIL_USER,
  };

  sendSmtpEmail.to = [
    {
      email: options.to,
    },
  ];

  sendSmtpEmail.replyTo = {
    email: options.replyTo,
  };

  return apiInstance.sendTransacEmail(sendSmtpEmail);
};
