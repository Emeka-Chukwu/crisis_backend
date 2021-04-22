const MailService = require("../services/send_mail");
exports.sendEmail = async (req, res, next)=>{
try{
    let email = await MailService.sendMailToAdmin(req, res, next);
res.status(200).json({"message": "Mail sent to admin", data: req.body});
}catch(error){
    if(!error.statusCode) error.statusCode = 500;
    console.log(error);
   return res.status(error.statusCode).json({error, data: req.body});
}
}
