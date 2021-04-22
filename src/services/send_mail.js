        "use strict";
        require("dotenv").config();
const nodemailer = require("nodemailer");

class MailService{

    // register user service
    static async sendMailToAdmin(req, res, next){



// async..await is not allowed in global scope, must use a wrapper
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    service:"gmail",
    // secure: false, // true for 465, false for other ports
    auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: "emekapascal11@gmail.com", // list of receivers
    subject: "A new emergency is submitted", // Subject line
    text: "A new emergency has ben submitted to the server for further analysis?", // plain text body
    html: "<b>A new emergency has ben submitted to the server for further analysis?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



}

module.exports = MailService;