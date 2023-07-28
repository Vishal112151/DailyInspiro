const sendWhatsappService = require("../service/sendWhatsapp.service");
const sendWhatsapp = (req,res)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let result = await sendWhatsappService.sendWhatsapp(req,res);
            console.log("i am in sendWhatsapp Controller, Email Sent !");
            res.send(result);
        } catch (error) {
            console.log('i am in sendWhatsapp Controller, Getting Error in Sending Email :  ',error);
            res.send(error)
        }
    })
}
module.exports={sendWhatsapp}