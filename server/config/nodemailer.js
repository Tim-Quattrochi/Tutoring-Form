const dotenv = require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.HASHED_PASS,
  },
});

module.exports = {
  verifyUserEmail: async function verifyUserEmail(
    name,
    email,
    cohortType,
    link,
    assignment
  ) {
    try {
      let info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "New Coaching Prep Form Submission",
        html: `Hi there, ${name} just submitted a prep form with the following information
            <h1>${name}</h1>
           <br> Email: ${email}
           <br> Cohort: ${cohortType}
           <br> Link to Repo ${link}
           <br> Assignment: ${assignment}
          `,
      });
      console.log(process.env.HASHED_PASS);
      console.log(process.env.EMAIL);
    } catch (err) {
      console.log(err);
    }
  },
};
