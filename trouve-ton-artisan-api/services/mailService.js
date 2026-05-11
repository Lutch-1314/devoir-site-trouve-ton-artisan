const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

exports.sendMail = async (options) => {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.sender = {
    email: process.env.EMAIL_USER,
    name: "Trouve Ton Artisan",
  };

sendSmtpEmail.to = [
  {
    email: options.to,
  },
];

  sendSmtpEmail.subject = options.subject;

   sendSmtpEmail.textContent = `
Nom : ${options.name}

Email : ${options.replyTo}

Message :
${options.message}
`;

  // IMPORTANT : replyTo DOIT être un objet
  sendSmtpEmail.replyTo = {
    email: options.replyTo,
    name: options.name,
  };

  console.log(sendSmtpEmail);

  return await apiInstance.sendTransacEmail(sendSmtpEmail);
};