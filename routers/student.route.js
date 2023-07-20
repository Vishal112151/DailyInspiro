const express = require("express");
const router = express.Router();
const studentController = require("../controller/student.controller");

router.get("/students", studentController.getStudents);

router.post("/signup", studentController.signup);

router.post("/login",studentController.login);

module.exports = router;
