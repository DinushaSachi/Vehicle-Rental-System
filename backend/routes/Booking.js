const express = require("express");
const router = express.Router();
const { booking }  = require("../models/BookingApplication");
const {Companybooking}  = require("../models/Booking");

 // add Booking temperaly
 router.route("/addnewbookingApp").post((req, res) => {
    const PickupLocation = req.body.PickupLocation;
    const PickupDate = req.body.PickupDate;
    const PickupTime = req.body.PickupTime;
    const DropLocation = req.body.DropLocation;
    const Passengers = req.body.Passengers;
    const VehicleType = req.body.VehicleType;
    const CustomerName = req.body.CustomerName;
    const Email = req.body.Email;
    const MobileNo = req.body.MobileNo;
    const Message = req.body.Message;
  
    const newbookingApp = new booking({
      PickupLocation,
      PickupDate,
      PickupTime,
      DropLocation,
      Passengers,
      VehicleType,
      CustomerName,
      Email,
      MobileNo,
      Message,
    });
  
    newbookingApp
      .save()
      .then(() => {
        res.json("Application Added");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  module.exports = router;
  
  //localhost:8070/Bookingapp/
  
  router.route("/").get((req, res) => {
    booking
      .find()
      .then((booking) => {
        res.json(booking);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  //delete  Booking application
  
  router.route("/delete/:id").delete((req, res) => {
    const id = req.params.id;
    booking
      .findByIdAndDelete(id)
      .then(() => {
        res.json(" Booking Apllication deleted");
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // add Booking as permanant
  router.route("/addCBooking").post((req, res) => {
    const PickupLocation  = req.body.PickupLocation;
    const PickupDate = req.body.PickupDate;
    const PickupTime = req.body.PickupTime;
    const DropLocation = req.body.DropLocation;
    const Passengers = Number(req.body.Passengers);
    const VehicleType = req.body.VehicleType ;
    const CustomerName = req.body.CustomerName;
    const Email = req.body.Email;
    const MobileNo = Number(req.body.MobileNo);
    const Message = req.body.Message;
  
    const CBooking = new Companybooking({
      PickupLocation,
      PickupDate,
      PickupTime,
      DropLocation,
      Passengers,
      VehicleType,
      CustomerName,
      Email,
      MobileNo,
      Message,
    });
  
    CBooking.save()
      .then(() => {
        res.json("Application Added");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  //localhost:8070/BookingApp/
  
  router.route("/Companybooking").get((req, res) => {
    Companybooking.find()
      .then((Companybooking) => {
        res.json(Companybooking);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  //get Driver details by id to edit
  router.route("/CompanyBooking/:id").get((req, res) => {
    Companybooking.findById(req.params.id)
      .then((Companybooking) => {
        res.json(Companybooking);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  //Update Driver Details
  router.route("/EditBooking/:id").put((req, res) => {
    const PickupLocation = req.body.PickupLocation;
    const PickupDate = req.body.PickupDate;
    const PickupTime = req.body.PickupTime;
    const DropLocation = req.body.DropLocation;
    const Passengers = Number(req.body.Passengers);
    const VehicleType = req.body.VehicleType;
    const CustomerName = req.body.CustomerName;
    const Email = req.body.Email;
    const MobileNo = Number(req.body.MobileNo);
    const Message = req.body.Message;
  
    const dataSet = {
      PickupLocation,
      PickupDate,
      PickupTime,
      DropLocation,
      Passengers,
      VehicleType,
      CustomerName,
      Email,
      MobileNo,
      Message,
    };
  
    Companybooking.findByIdAndUpdate(req.params.id, dataSet)
      .then((dataSet) => {
        res.json(dataSet);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  // Delete Driver
  router.route("/DeleteBooking/:id").delete((req, res) => {
    const id = req.params.id;
    Companybooking.findByIdAndDelete(id)
      .then(() => {
        res.json("Successfully deleted");
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
module.exports = router;
  