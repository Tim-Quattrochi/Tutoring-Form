const {
  transporter,
  mailInfo,
  verifyUserEmail,
} = require("../config/nodemailer");
const Form = require("../models/Form");

const retrieveForm = async (req, res) => {
  const {
    name,
    email,
    cohort,
    link,
    assignment,
    cohortType,
    acceptedTOS,
  } = req.body;

  try {
    const formResponse = await Form.create({
      name,
      email,
      cohort,
      link,
      assignment,
      cohortType,
      acceptedTOS,
    });

    verifyUserEmail(name, email, cohortType, link, assignment);

    console.log(process.env.HASHED_PASS);

    res.status(201).json(formResponse);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { retrieveForm };
