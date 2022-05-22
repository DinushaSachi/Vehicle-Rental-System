const express = require("express");
const router = express.Router();
const { driver } = require("../models/DriverApplication");
const { Companydriver } = require("../models/Driver");
const { vApplication } = require("../models/VehicleApplication");
const { thirddPartyVehicleOwner } = require("../models/vehicleOwner");
const { ThirdParty_Vehicle } = require("../models/ThirdPartyVehicle");
const {Customer} = require("../models/CustomerLogin");
const { booking }  = require("../models/BookingApplication");
const {Companybooking}  = require("../models/Booking");



// REGARDING DRIVER MANAGEMENT

// add driver temperaly
router.route("/add").post((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Gender = req.body.Gender;
  const Birthday = req.body.Birthday;
  const Age = req.body.Age;
  const NIC = req.body.NIC;
  const ContactNumber = req.body.ContactNumber;
  const Email = req.body.Email;
  const Address = req.body.Address;
  const District = req.body.District;
  const Experiences = req.body.Experiences;

  const newDriverApp = new driver({
    FirstName,
    LastName,
    Gender,
    Birthday,
    Age,
    NIC,
    ContactNumber,
    Email,
    Address,
    District,
    Experiences,
  });

  newDriverApp
    .save()
    .then(() => {
      res.json("Application Added");
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;

//localhost:8070/DriverApp/

router.route("/").get((req, res) => {
  driver
    .find()
    .then((driver) => {
      res.json(driver);
    })
    .catch((err) => {
      res.json(err);
    });
});

//delete  driver application

router.route("/delete/:id").delete((req, res) => {
  const id = req.params.id;
  driver
    .findByIdAndDelete(id)
    .then(() => {
      res.json(" driver's Apllication deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});

// add Driver as permanant
router.route("/addDriver").post((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Gender = req.body.Gender;
  const Birthday = req.body.Birthday;
  const Age = Number(req.body.Age);
  const NIC = Number(req.body.NIC);
  const ContactNumber = Number(req.body.ContactNumber);
  const Email = req.body.Email;
  const Address = req.body.Address;
  const District = req.body.District;
  const Experiences = req.body.Experiences;

  const CDriver = new Companydriver({
    FirstName,
    LastName,
    Gender,
    Birthday,
    Age,
    NIC,
    ContactNumber,
    Email,
    Address,
    District,
    Experiences,
  });

  CDriver.save()
    .then(() => {
      res.json("Application Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/DriverApp/

router.route("/Companydriver").get((req, res) => {
  Companydriver.find()
    .then((Companydriver) => {
      res.json(Companydriver);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get Driver details by id to edit
router.route("/Companydriver/:id").get((req, res) => {
  Companydriver.findById(req.params.id)
    .then((Companydriver) => {
      res.json(Companydriver);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update Driver Details
router.route("/Update/:id").put((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Gender = req.body.Gender;
  const Birthday = req.body.Birthday;
  const Age = Number(req.body.Age);
  const NIC = Number(req.body.NIC);
  const ContactNumber = Number(req.body.ContactNumber);
  const Email = req.body.Email;
  const Address = req.body.Address;
  const District = req.body.District;

  const dataSet = {
    FirstName,
    LastName,
    Gender,
    Birthday,
    Age,
    NIC,
    ContactNumber,
    Email,
    Address,
    District,
  };

  Companydriver.findByIdAndUpdate(req.params.id, dataSet)
    .then((dataSet) => {
      res.json(dataSet);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Driver
router.route("/DeleteDriver/:id").delete((req, res) => {
  const id = req.params.id;
  Companydriver.findByIdAndDelete(id)
    .then(() => {
      res.json("Successfully deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});

/*--------------------------------------------------------------------------------------------------------------------------------- */

/*REGARDING 3rd PARTY VEHILCE MANAGEMENT*/

// add Vehicle Application temperaly//

router.route("/addVehicleApplication").post((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const NIC = req.body.NIC;
  const ContactNumber = req.body.ContactNumber;
  const Email = req.body.Email;
  const Address = req.body.Address;
  const District = req.body.District;

  const vModel = req.body.vModel;
  const vCategory = req.body.vCategory;
  const vehicleNumber = req.body.vehicleNumber;
  const manufacturedYear = Number(req.body.manufacturedYear);
  const fuelType = req.body.fuelType;
  const vStatus = req.body.vStatus;
  const fileName = req.body.vModel;

  const newVehicleApp = vApplication({
    FirstName,
    LastName,
    NIC,
    ContactNumber,
    Email,
    Address,
    District,

    vModel,
    vCategory,
    vehicleNumber,
    manufacturedYear,
    fuelType,
    vStatus,
    fileName,
  });

  newVehicleApp
    .save()
    .then(() => {
      res.json("Application Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/getvapplications").get((req, res) => {
  vApplication
    .find()
    .then((vApplication) => {
      res.json(vApplication);
    })
    .catch((err) => {
      res.json(err);
    });
});

//delete  vehicle application

router.route("/VAppdelete/:id").delete((req, res) => {
  const id = req.params.id;
  vApplication
    .findByIdAndDelete(id)
    .then(() => {
      res.json(" entrolled driver's Apllication deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});

// add Vehicle Owner as permanant
router.route("/addVehicleOwner").post((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const NIC = req.body.NIC;
  const ContactNumber = req.body.ContactNumber;
  const Email = req.body.Email;
  const Address = req.body.Address;
  const District = req.body.District;

  const vehicleOwner = new thirddPartyVehicleOwner({
    FirstName,
    LastName,
    NIC,
    ContactNumber,
    Email,
    Address,
    District,
  });

  vehicleOwner
    .save()
    .then(() => {
      res.json("Application data Added to vehicle Owner table");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/thirddPartyVehicleOwner").get((req, res) => {
  thirddPartyVehicleOwner
    .find()
    .then((thirddPartyVehicleOwner) => {
      res.json(thirddPartyVehicleOwner);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get Vehicle Owner details by id to edit
router.route("/thirddPartyVehicleOwner/:id").get((req, res) => {
  thirddPartyVehicleOwner
    .findById(req.params.id)
    .then((thirddPartyVehicleOwner) => {
      res.json(thirddPartyVehicleOwner);
    })
    .catch((err) => {
      console.log(err);
    });
});

// add Third Party Vehicle as permanant
router.route("/addTvehicle").post((req, res) => {
  const vModel = req.body.vModel;
  const vCategory = req.body.vCategory;
  const vehicleNumber = req.body.vehicleNumber;
  const manufacturedYear = Number(req.body.manufacturedYear);
  const fuelType = req.body.fuelType;
  const vStatus = req.body.vStatus;
  const fileName = req.body.fileName;

  const Tvehicle = new ThirdParty_Vehicle({
    vModel,
    vCategory,
    vehicleNumber,
    manufacturedYear,
    fuelType,
    vStatus,
    fileName,
  });

  Tvehicle.save()
    .then(() => {
      res.json("Application data Added to vehicle  table");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/ThirdParty_Vehicle").get((req, res) => {
  ThirdParty_Vehicle.find()
    .then((ThirdParty_Vehicle) => {
      res.json(ThirdParty_Vehicle);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get Third Party Vehicle  details by id to edit
router.route("/ThirdParty_Vehicle/:id").get((req, res) => {
  ThirdParty_Vehicle.findById(req.params.id)
    .then((ThirdParty_Vehicle) => {
      res.json(ThirdParty_Vehicle);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update Vehicle Owner Details

router.route("/UpdateVehicleOwner/:id").put((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const NIC = Number(req.body.NIC);
  const ContactNumber = Number(req.body.ContactNumber);
  const Email = req.body.Email;
  const Address = req.body.Address;
  const District = req.body.District;

  const dataSet = {
    FirstName,
    LastName,
    NIC,
    ContactNumber,
    Email,
    Address,
    District,
  };

  thirddPartyVehicleOwner
    .findByIdAndUpdate(req.params.id, dataSet)
    .then((dataSet) => {
      res.json(dataSet);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update Third Party Vehicle Details

router.route("/UpdateTvehicle/:id").put((req, res) => {
  const vModel = req.body.vModel;
  const vCategory = req.body.vCategory;
  const vehicleNumber = Number(req.body.vehicleNumber);
  const manufacturedYear = Number(req.body.manufacturedYear);
  const fuelType = req.body.fuelType;
  const vStatus = req.body.vStatus;
  const fileName = req.body.fileName;

  const dataSet = {
    vModel,
    vCategory,
    vehicleNumber,
    manufacturedYear,
    fuelType,
    vStatus,
    fileName,
  };

  ThirdParty_Vehicle.findByIdAndUpdate(req.params.id, dataSet)
    .then((dataSet) => {
      res.json(dataSet);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Vehicle Owner

router.route("/DeleteVehicleOwner/:id").delete((req, res) => {
  const id = req.params.id;
  thirddPartyVehicleOwner
    .findByIdAndDelete(id)
    .then(() => {
      res.json("Successfully deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});

// Delete Third Party Vehicle

router.route("/DeleteTvehicle/:id").delete((req, res) => {
  const id = req.params.id;
  ThirdParty_Vehicle.findByIdAndDelete(id)
    .then(() => {
      res.json("Successfully deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});

//----------------------------------------------------------------------------------------------------------------------//
//Login Function

//Customer Login 
router.route("/cuslogin").post((req, res) => {

  const StaffUserName = req.body.StaffUserName;
  const StaffPassword = req.body.StaffPassword;
  
  Customer.findOne({StaffUserName:StaffUserName},(err,user)=>{
    if(user){

      if(StaffPassword === user.StaffPassword){
        res.json("Login Successfull")

      }else{
        res.json("password didnt match")
      }

    }else{
      res.json("Customer is not registered")
    }
  })


 });

// Staff Login

router.route("/stafflogin").post((req,res)=>{

  const StaffUserName = req.body.StaffUserName;
  const StaffPassword = req.body.StaffPassword;
  
  Customer.findOne({StaffUserName:StaffUserName},(err,user)=>{
    if(user){

      if(StaffPassword === user.StaffPassword){
        res.json("Login Successfull")

      }else{
        res.json("password didnt match")
      }

    }else{
      res.json("Staffa member is not registered")
    }
  })

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


 });

module.exports = router;
