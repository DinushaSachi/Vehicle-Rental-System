const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverPaymentSchema = new Schema({


    driverId : {
        type : String,
        required : true
    },

    noOfworkingDays : {
        type : Number,
        required : true
    },

    totalTrips : {
        type : Number,
        required : true
    },

    totalKm : {
        type : Number,
        required : true
    },

    FixedPayment : {
        type : Number,
        required : true
    },

    AdditionalPayment : {
        type : Number,
        required : true
    },

    bonus : {
        type : Number,
        required : true
    },

    total : {
        type : Number,
        required : true
    }

})


const driverpayment = mongoose.model("driverpayment", driverPaymentSchema);

module.exports = driverpayment;

