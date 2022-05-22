const mongoose = require("mongoose");
const { Schema } = mongoose;

const driverAppSchema = new Schema({
  FirstName: {
    type: String,
    trim:true,
    required: true,
  },
  LastName: {
    type: String,
    trim:true,
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
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    lowercase:true,
    unique:true,
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

const driver = mongoose.model("DriverApplication", driverAppSchema);
module.exports = { driver };
