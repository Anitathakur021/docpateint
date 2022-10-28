module.exports = function (app) {
  var userAuth = require("../controlers/userAuthController");
  app.route("/SignUp").post(userAuth.SignUp);
};
