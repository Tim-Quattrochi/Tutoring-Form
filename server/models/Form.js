const mongoose = require("mongoose");

const FormSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    assignment: {
      type: String,
      required: true,
    },
    cohortType: {
      type: String,
      required: true,
    },
    additionalDetails: {
      type: String,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Form", FormSchema);
