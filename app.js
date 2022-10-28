var express = require("express");
let app = express(),
  port = 3001,
  mongoose = require("mongoose");
(bodyParser = require("body-parser")), 

(users = require("./moules/UsersModel")),
  //   (groups = require("./api/models/groupModel")),
  //   (payMethod = require("./api/models/payMethodModel")),
  //   (adminMethod = require("./api/models/adminModel")),
  //   (dynamicData = require("./api/models/dynamicDataModel")),
  //   (friends = require("./api/models/friendsModel")),
  //   (CreditCard = require("./api/models/payMethodModel")),
  //   (transaction = require("./api/models/transactionModel")),
  //   (paymentRequest = require("./api/models/paymentRequestModel"));

  // mongoose.Promise = global.Promise;
  // mongoose.connect("mongodb://localhost/lyncpay"); // live
  // mongoose.connect("mongodb://localhost/lyncpay", { useMongoClient: true }); // local

  mongoose.connect("mongodb://localhost/docpatient");

// mongoose.connect('mongodb://localhost:27017/lyncpay',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );
var path = __dirname;
app.use("/server/data", express.static(path + "/data"));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Auth_Token"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("port", port);

var routes = require("./routers/route");
routes(app);

app.listen(port);
module.exports = app;

console.log("todo list RESTful API server started on: " + port);
