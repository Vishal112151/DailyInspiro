const express = require("express");
const bodyParser = require("body-parser");
const schedule = require('node-schedule');
const sendEmailService=require("./service/sendEmail.service")
const app = express();
const port = 5000;
//nodemailer app password bnane time diye the
const userRoute=require('./routers/student.route')
const testRoute=require("./routers/test.route")
const sendEmailRoute=require("./routers/sendEmail.route")
const sendWhatsappRouter =require("./routers/sendWhatsapp.route")
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use('/',userRoute);
app.use('/',testRoute);
app.use('/',sendEmailRoute);
app.use('/',sendWhatsappRouter);

 
const date = new Date(2012, 11, 21, 5, 30, 0);

// const job = schedule.scheduleJob('*/1 * * * *', sendEmailService.sendEmail);


app.listen(port, (req, res) => {
  console.log(`localhost:${port}`);
});