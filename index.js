const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
//nodemailer app password bnane time diye the
const userRoute=require('./routers/student.route')
const testRoute=require("./routers/test.route")
const sendEmailRoute=require("./routers/sendEmail.route")
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use('/',userRoute);
app.use('/',testRoute);
app.use('/',sendEmailRoute);

app.listen(port, (req, res) => {
  console.log(`localhost:${port}`);
});