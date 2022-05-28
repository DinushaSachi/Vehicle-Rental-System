import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/ApplicationManagement/DriverApplication/header";
import DriverApplication from "./Components/ApplicationManagement/DriverApplication/DriverApplication";
import AllApplications from "./Components/ApplicationManagement/DriverApplication/AllApplications";
import AllDrivers from "./Components/ApplicationManagement/DriverApplication/DriverDetails";
import Home from "./Components/ApplicationManagement/CustomerUI/Home";
import Vehicleapplication from "./Components/ApplicationManagement/3rdPartyVehicleApplication/Vehicleapplication";
import AllvehiApp from "./Components/ApplicationManagement/3rdPartyVehicleApplication/AllvehiApp";
import Customerhome from "./Components/CustomerHome/Customerhome";
import CusHeader from "./Components/CustomerHome/cusHeader";
import Staffhome from "./Components/StaffHome/Staffhome";
import VehicleOwners from "./Components/ApplicationManagement/3rdPartyVehicleApplication/VehicleOwners";
import ThirdPartyVehicles from "./Components/ApplicationManagement/3rdPartyVehicleApplication/ThirdPartyVehicles";
import EditDriverDetails from "./Components/ApplicationManagement/DriverApplication/EditDriverDetails";
import EditVehicleOwner from "./Components/ApplicationManagement/3rdPartyVehicleApplication/EditVehicleOwner";
import EditThirdPartyVehicle from "./Components/ApplicationManagement/3rdPartyVehicleApplication/EditThirdPartyVehicle";
import login from "./Components/Login/login";
import Booking from "./Components/ApplicationManagement/Booking/Booking";
import EditBookingDetails from "./Components/ApplicationManagement/Booking/EditBookingDetails";
import AllBooking from "./Components/ApplicationManagement/Booking/BookingDetails";
import Report from "./Components/ApplicationManagement/Report/ThirdPartyVehicleReport";
import Breport from "./Components/ApplicationManagement/Report/BookingReport";
import CheckBooking from "./Components/ApplicationManagement/Booking/AllBooking";

import Dreport from "./Components/ApplicationManagement/Report/reportGenerate";
import FeedBack from "./Components/ApplicationManagement/FeedBack/FeedBackapplication";
import AllFeedBack from "./Components/ApplicationManagement/FeedBack/FeedbackDetails";
import EditFeedBackdetails from "./Components/ApplicationManagement/FeedBack/EditFeedbackDetails";
import Footer from "./Components/ApplicationManagement/Booking/FooterComponent";
import CusFooter from "./Components/CustomerHome/CusFooter"




function App() {
  return (
    <Router>
      <div>
        <switch>
        
          <Route path="/Serviceshome" exact component={CusHeader} />
          <Route path="/Serviceshome" exact component={Home} />

          <Route path="/check" exact component={Header} />
          <Route path="/check" exact component={AllApplications} />

          <Route path="/add" exact component={CusHeader} />
          <Route path="/add" exact component={DriverApplication} />

          <Route path="/SeeAllDrivers" exact component={Header} />
          <Route path="/SeeAllDrivers" exact component={AllDrivers} />

          <Route path="/addVehicleApplication" exact component={CusHeader} />
          <Route
            path="/addVehicleApplication"
            exact
            component={Vehicleapplication}
          />

          <Route path="/vehi" exact component={Header} />
          <Route path="/vehi" exact component={AllvehiApp} />

          <Route path="/" exact component={login} />

          <Route path="/cushome" exact component={CusHeader} />
          <Route path="/cushome" exact component={Customerhome} />

          <Route path="/staffhome" exact component={Header} />
          <Route path="/staffhome" exact component={Staffhome} />

          <Route path="/vehicleowners" exact component={Header} />
          <Route path="/vehicleowners" exact component={VehicleOwners} />

          <Route path="/thirdpvehicles" exact component={Header} />
          <Route path="/thirdpvehicles" exact component={ThirdPartyVehicles} />

          <Route path="/edit/:id" exact component={Header} />
          <Route path="/edit/:id" exact component={EditDriverDetails} />

          <Route path="/eown/:Ownerid" exact component={Header} />
          <Route path="/eown/:Ownerid" exact component={EditVehicleOwner} />

          <Route path="/evehi/:id" exact component={Header} />
          <Route path="/evehi/:id" exact component={EditThirdPartyVehicle} />

          <Route path="/addBooking" exact component={CusHeader} />
          <Route path="/addBooking" exact component={Booking} /> 
          

          <Route path="/editBooking/:id" exact component={CusHeader} />
          <Route path="/editBooking/:id" exact component={EditBookingDetails} />
         

          <Route path="/SeeAllBooking" exact component={Header} />
          <Route path="/SeeAllBooking" exact component={AllBooking} />
          <Route path="/SeeAllBooking" exact component={CusFooter} />

          <Route path="/Vreport" exact component={Report} />

          <Route path="/Breport" exact component={CusHeader} />
          <Route path="/Breport" exact component={Breport} />

          <Route path="/checkBooking" exact component={Header} />
          <Route path="/checkBooking" exact component={CheckBooking} />
          <Route path="/checkBooking" exact component={Footer} />



          <Route path="/Dreport" exact component={Dreport} />

          <Route path="/addFeedback" exact component={CusHeader} />
          <Route path="/addFeedback" exact component={FeedBack} />

          <Route path="/SeeAllFeedback" exact component={Header} />
          <Route path="/SeeAllFeedback" exact component={AllFeedBack} />

          <Route path="/editFeedback/:id" exact component={CusHeader} />
          <Route path="/editFeedback/:id" exact component={EditFeedBackdetails} />









          


      
       </switch>
      </div>
    </Router>
  );
}

export default App;
