"use strict";
errors = ["", null, undefined];

//modules
var mongoose = require("mongoose"),
  path = require("path"),
  passwordHash = require("password-hash");

//tables
var OTPTable = mongoose.model("OTP"),
  UserTable = mongoose.model("User");

exports.SignUp = SignUp;

async function SignUp(req, res, next) {
  console.log(req.body);
  try {
    const { email, password, name } = req.body;
    if (errors.indexOf(name) >= 0)
      return res.json({ status: false, msg: "Please provide the name." });

    const user = new UserTable({
      email: email,
      password: passwordHash.generate(password),

      name: name,
    });
    // console.log(user);
    let data = await user.save();
    console.log(data);
    const token = jwt.sign({ user_id: data._id }, process.env.TOKEN_KEY, {
      expiresIn: "365d",
    });
    console.log(token);
    data.token = token;
    res.status(200).json({
      status: true,
      data: data,
      token: token,
    });
  } catch (err) {
    console.log("error, 330", err);
    return res
      .status(401)
      .send({ status: false, msg: "Something Went Wrong. Please Try Again!" });
  }
}
