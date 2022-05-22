const mongoose = require("mongoose");
const { Schema } = mongoose;

const vApplication = new Schema({
    FirstName: {
        type: String,
        required: true,
      },
      LastName: {
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
      },
      Address: {
        type: String,
        required: true,
      },
    
      District: {
        type: String,
        required: true,
      },
  
});

const thirddPartyVehicleOwner = mongoose.model("ThirdParty_Vehicle-Owner", vApplication);
module.exports = { thirddPartyVehicleOwner };