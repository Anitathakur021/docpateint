"use strict";

var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    email: { type: String, lowercase: true, trim: true, default: null, required: true},
    password: { type: String, default: null,required: true },
   

    name: { type: String, default: null },
   
  },
  { timestamps: true }
);

var OTPSchema = new mongoose.Schema(
  {
    otp: { type: String, required: true },
    phone: { type: String, required: true },
    countryCode: { type: String, default: null },
  },
  { timestamps: true }
);

//type 1 is for if user is added to any group
//type 2 is for if expense is added to any user
var NotificationsSchema = new mongoose.Schema(
  {
    fromId: {
      type: String,
    },
    toId: { type: [], default: [] },
    type: {
      type: String,
    },
    Seen: {
      type: [],
      default: [],
    },
    data_params: {
      type: Object,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OTP", OTPSchema);
module.exports = mongoose.model("User", UserSchema);
module.exports = mongoose.model("Notification", NotificationsSchema);
