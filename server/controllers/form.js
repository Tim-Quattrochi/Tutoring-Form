const {
  transporter,
  mailInfo,
  sendNotificationToAdmin,
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
    addDetails,
    emailResponses,
  } = req.body;

  try {
    const formResponse = await Form.create({
      name,
      email,
      cohort,
      link,
      assignment,
      cohortType,
      addDetails,
    });

    sendNotificationToAdmin(
      name,
      email,
      cohortType,
      link,
      assignment,
      addDetails,
      emailResponses ? emailResponses : null
    );

    res.status(201).json(formResponse);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { retrieveForm };
