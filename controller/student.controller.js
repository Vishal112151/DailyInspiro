const studentService = require("../service/student.service");
const signup = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await studentService.signup(req, res);
      res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
  });
};

const login = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await studentService.login(req, res);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};

const getStudents = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await studentService.getStudents(req, res);
      res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
  });
};

module.exports = { signup, login, getStudents };
