const express = require('express');
const sendEmailController = require("../controller/sendEmail.controller")
const router = express.Router();
router.post('/sendEmail',sendEmailController.sendEmail);
module.exports=router