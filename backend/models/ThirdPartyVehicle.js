const mongoose = require("mongoose");
const { Schema } = mongoose;

const vApplication = new Schema({
  vModel: {
    type: String,
    required: true,
  },
  vCategory: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type:   String,
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
    required: true,
  },
});

const ThirdParty_Vehicle = mongoose.model("ThirdParty_Vehicle", vApplication);
module.exports = { ThirdParty_Vehicle };
