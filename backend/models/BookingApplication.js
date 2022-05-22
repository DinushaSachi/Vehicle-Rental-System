const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingAppSchema = new Schema({
  PickupLocation: {
    type: String,
    trim:true,
    required: true,
  },
  PickupDate: {
    type: Date,
    trim:true,
    required: true,
  },
  PickupTime: {
    type: String,
    required: true,
  },
  DropLocation: {
    type: String,
    required: true,
  },
  Passengers: {
    type: Number,
    required: true,
  },
  VehicleType: {
    type: String,
    required: true,
  },
  CustomerName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  MobileNo: {
    type: Number,
    required: true,
  },

  Message: {
    type: String,
    required: true,
  },
});

const booking = mongoose.model("BookingApplication", bookingAppSchema);
module.exports = { booking };
