module.exports = function(app) {
    var userAuth = require('../controllers/userAuthController');
    app.route("/SignUp").post(userAuth.SignUp)
}