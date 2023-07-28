const twilio = require("twilio");
const accountSid = "AC4e4fb43c20dd80fb6e47ede36ae860d4";
const authToken = "c73a2b6d02a3689b492ceba0421f4091";
const client = require("twilio")(accountSid, authToken);
const sendWhatsapp = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = [];

      client.messages
        .create({
          body: "Saka Laka BumBum, Jo jeeta Whi Sikandar, Haar k bhi jitne wale ko bazigar kahte hi 😂😅🤣",
        //   from: "whatsapp:+14155238886",//this is for when you want to send message on whatsapp
        //   to: "whatsapp:+918210936562",
          from: "+17623549992",//this is for when you want to send normal text message 
          to: "+918210936562",
        })
        .then((message) => console.log(message.sid));
      resolve({
        message: "Whatsapp message sent successfully",
        data: result,
      });
    } catch (error) {
      reject({
        message: "Error in sending message",
        err: error,
      });
    }
  });
};
module.exports = { sendWhatsapp };
