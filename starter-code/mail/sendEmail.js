const transporter = require("./transporterGmail");
const path = require("path");

const sendEmail = (to, confirmationCode, from = "prueba@falseo.com") => {
  return transporter
    .sendMail({
      from: `Pedro & Luna <${from}>`,
      to,
      subject: "[NODEMAILER] Pedro & Luna - IronHack", // Asunto
      text: `http://localhost:3000/auth/confirm/${confirmationCode}`
    })
    .then(info => console.log(info));
};
module.exports = sendEmail;
