const express = require("express");
const router = express.Router();
const sendEmailController = require("../controller/send_mail");

router.post('/sendmail', sendEmailController.sendEmail);

module.exports = router;