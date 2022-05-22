const mongoose = require("mongoose");
const { Schema } = mongoose;

const driver = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Birthday: {
    type: Date,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  NIC: {
    type: Number,
    required: true,
  },
  ContactNumber: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },

  District: {
    type: String,
    required: true,
  },
  Experiences: {
    type: String,
    required: true,
  },
});

const Companydriver = mongoose.model("Driver_Table", driver);
module.exports = { Companydriver };
