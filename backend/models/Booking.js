const mongoose = require("mongoose");
const { Schema } = mongoose;

const booking = new Schema({
  PickupLocation: {
    type: String,
    required: true,
  },
  PickupDate: {
    type: Date,
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

const Companybooking = mongoose.model("Booking_tables", booking);
module.exports = {Companybooking} ;
