const { pgConn } = require("../database/pgDBConn");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const signup = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { name, email, mobile, password } = req.body;
      console.log("req.body : ", name, email, mobile, password);
      let isstudentPresnt = await pgConn(
        `select * from students where email=$1 or mobile=$2`,
        [email, mobile]
      );
        console.log(isstudentPresnt);
      if (isstudentPresnt.rows.length > 0) {
        resolve({
          message: "student is already Registered ",
        });
      } else {
        let jwt = require("jsonwebtoken");
        let token = jwt.sign({ email: email, mobile: mobile }, "secretKey");
        console.log("token : ", token);

        var decoded = jwt.verify(token, "secretKey");
        console.log("decoded email :", decoded.email);

        const hash = await bcrypt.hash(password, saltRounds);
        // Store hash in your password DB.
        console.log("hased password : ", hash);
        await pgConn(
          `insert into students ( name, email, mobile,password) values($1,$2,$3,$4)`,
          [name, email, mobile, hash]
        );

        resolve({
          status: "Success",
          message: "Signed Up Successfully",
        });
      }
    } catch (error) {
      console.log("here", error);
      reject({
        status: "Failure",
        message: "unable to insert data in DB",
        error: error.message,
      });
    }
  });
};

const login = async (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
          let email = req.body.email;
          let mobile = req.body.mobile;
          let password = req.body.password;
          let isRegstudent;
          if (email != undefined) {
            console.log("trying to login through email");
            isRegstudent = await pgConn(`select * from students where email=$1`, [
              email,
            ]);
          } else if (mobile != undefined) {
            console.log("trying to login through mobile");
            isRegstudent = await pgConn(`select * from students where mobile=$1`, [
              mobile,
            ]);
          }
          if (isRegstudent.rows.length == 0) {
            reject(
             {
                message: "student is not registered, First register Yourself !",
            }
            );
          } else {
            console.log(isRegstudent.rows);
            const isPasswordMatched = await bcrypt.compare(
              password,
              isRegstudent.rows[0].password
            );
            console.log(
              "after comparing hash password with this password : ",
              isPasswordMatched
            );
            if (isPasswordMatched)
              resolve({ message: "welcome to the dashboard" });
            else {
              reject({message: "username or password is incorrect" });
            }
          }
        } catch (error) {
          console.log("i am here in catch block");
          reject({
            message:"Eroor in login",
            error:error.message
          })
        }
      });
};

const getStudents = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await pgConn(`select * from students`);
      resolve({
        message: "List of all Students",
        data: result.rows,
      });
    } catch (error) {
      reject({
        message: "Getting Error in getting List of all Students",
        error: error.message,
      });
    }
  });
};

module.exports = { signup, login, getStudents };
