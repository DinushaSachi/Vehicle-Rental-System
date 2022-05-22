const mongoose = require("mongoose");
const { Schema } = mongoose;

const VehicleApplication = new Schema({
  // Vehicle Owner Details
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
    lowercase:true,
  },
  Address: {
    type: String,
    required: true,
  },

  District: {
    type: String,
    required: true,
  },

  //Vehicle Details

  vModel: {
    type: String,
    required: true,
  },
  vCategory: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  manufacturedYear: {
    type: Number,
    required: true,
  },

  fuelType: {
    type: String,
    required: true,
  },
  vStatus: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    //required: true,
  },
});

const vApplication = mongoose.model("VehicleApplication", VehicleApplication);
module.exports = { vApplication };
