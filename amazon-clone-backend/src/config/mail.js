import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // false for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});


transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP ERROR:", error.message);
  } else {
    console.log("SMTP Server is ready to send emails");
  }
});

export default transporter;