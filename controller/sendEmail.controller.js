const sendEmailService = require("../service/sendEmail.service");
const sendEmail = (req,res)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let result = await sendEmailService.sendEmail(req,res);
            console.log("i am in sendEmail Controller, Email Sent !");
            res.send(result);
        } catch (error) {
            console.log('i am in sendEmail Controller, Getting Error in Sending Email :  ',error);
            res.send(error)
        }
    })
}
module.exports={sendEmail}