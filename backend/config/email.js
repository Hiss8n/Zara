import nodemailer from "nodemailer";
import ENV from "./env.js";

export const sendVerificationEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: ENV.EMAIL_USER,
      pass: ENV.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: ENV.EMAIL_USER,
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  await transporter.sendMail(mailOptions);
};
