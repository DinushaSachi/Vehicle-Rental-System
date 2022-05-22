const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());

//const URL = process.env.MONGODB_URL;

const URL = process.emv.MONGODB_URL ;

/* mongoose.connect(URL, {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}); */

mongoose.connect(URL, {
   
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(()=>{
    console.log("MongoDB connection success!");
})

 const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection success!");
}) 


const customerDetailsRouter = require("./routes/customerDetails.js");

app.use("/customerDetails",customerDetailsRouter);


app.listen(PORT, () => {
    console.log('Server is UP and RUNNING on PORT! ${PORT}')
})