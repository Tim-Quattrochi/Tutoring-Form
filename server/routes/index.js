const express = require("express");

const { retrieveForm } = require("../controllers/form");

const router = express.Router();

router.post("/form", retrieveForm);

module.exports = router;
