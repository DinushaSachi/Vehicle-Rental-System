const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerLogin = new Schema({
  cutomerUserName: {
    type: String,
    required: true,
  },
  customerPassword: {
    type: String,
    required: true,
  }
});

const Customer = mongoose.model("CustomerLogin_Table", CustomerLogin);
module.exports = { Customer };
