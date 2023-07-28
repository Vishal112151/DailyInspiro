var nodemailer = require('nodemailer');
const quotes=require("../motivationalQuotes/Education.quote")
const users = require("../usersEmails");
const sendEmail = async(time) => {
  return new Promise(async (resolve, reject) => {
    console.log("Scheduled at : ",time);
    try {
      console.log("usres : ",users);
        let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "vishalmanit102@gmail.com",
          pass: "htmjkyruzwlftygv",//this is the app password generated by gmail by some setting , the name was nodemailer 
        },
      });
      
      // console.log("quotes : ",quotes);
     
      const quoteNo = Math.floor(Math.random() * (quotes.educationMotivationalQuotes.length) + 1)
      const emailSubjectNo = Math.floor(Math.random() * (quotes.emailSubjects.length) + 1)
      // console.log("subject",quotes.emailSubjects[emailSubjectNo]);
      let mailOptions = {
        from: "vishalmanit102@gmail.com",
        to: `${users}`,
        subject: quotes.emailSubjects[emailSubjectNo],
        text: quotes.educationMotivationalQuotes[quoteNo],
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
