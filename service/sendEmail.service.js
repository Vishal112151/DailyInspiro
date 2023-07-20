var nodemailer = require('nodemailer');
const sendEmail = async(req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
        let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "vishalmanit102@gmail.com",
          pass: "htmjkyruzwlftygv",//this is the app password generated by gmail by some setting , the name was nodemailer 
        },
      });
      const users = [
        "vishal.rao@truminds.com",
        "vishalbth99@gmail.com",
        "shivam.dixit@truminds.com",
      ];
      let mailOptions = {
        from: "vishalmanit102@gmail.com",
        to: `${users}`,
        subject: "Aaj ka gyan",
        text: "learning, how to send mail using nodejs?",
      };
     
        let result = await transporter.sendMail(mailOptions);
        resolve({
            messege:"Email Sent Successfully",
            from:result.envelope.from,
            to:result.envelope.to
        })
    } catch (error) {
        console.log("i am in sendEmail Service, Getting Error in sending Email : ",error);
        reject({
            message:"Getting Error in Sending Email ",
            error:error.message
        })
    }
  });
};

module.exports = { sendEmail };
