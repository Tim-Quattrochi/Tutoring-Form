const dotenv = require("dotenv").config();
const nodemailer = require("nodemailer");
const timeStamp = require("./timeStamp");

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
  sendNotificationToAdmin: async function sendNotificationToAdmin(
    name,
    email,
    cohortType,
    link,
    assignment,
    addDetails,
    emailResponses
  ) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        cc: emailResponses ? email : null,
        subject: `New Coaching Prep Form Submission - ${name}`,
        html: `<p>Hi there, ${name} just submitted a Tutoring prep form with the following information:</p>
          <br>
           <p> <strong>Email:</strong> ${email}</p>
           
           <p> <strong>Cohort:</strong> ${cohortType}</p>
        
           <p> <strong>Link to Repo:</strong> ${link}</p>
          
           <p> <strong>Assignment:</strong> ${assignment}</p>
           <p> <strong>Additional Details:</strong> ${
             addDetails ? addDetails : "None Provided."
           }</p>
           <br>

          <p>This form was submitted on: ${timeStamp()}</p>
          `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
