const express = require("express");
const router = express.Router();
const sendWhatsappController= require("../controller/sendWhatsapp.controller")
router.post("/sendWhatsapp",sendWhatsappController.sendWhatsapp);
module.exports=router;