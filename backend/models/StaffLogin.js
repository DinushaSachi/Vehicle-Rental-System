const mongoose = require("mongoose");
const { Schema } = mongoose;

const StaffLogin = new Schema({
  StaffUserName: {
    type: String,
    required: true,
  },
  StaffPassword: {
    type: String,
    required: true,
  }
});

const Staff = mongoose.model("StaffLogin_Table", StaffLogin);
module.exports = { Staff };
