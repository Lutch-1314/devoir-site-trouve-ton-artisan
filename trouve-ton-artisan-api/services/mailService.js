const brevo = require("@getbrevo/brevo");

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY,
);

exports.sendMail = async (options) => {
  const sendSmtpEmail = new brevo.SendSmtpEmail();

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
