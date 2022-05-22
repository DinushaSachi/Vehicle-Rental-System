import './App.css';
import Header from './components/Header';
import AddDriverpayment from './components/AddDriverpayment';
import AllPayments from './components/AllPayments';
import {BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from 'react';
import Home from './components/Home/Staffhome';
//import EditPayment from './components/EditPayment';
import EditPaymentDetails from './components/EditPaymentDetails';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        
      
        <Route path = "/add" exact component = {AddDriverpayment} />
        <Route path="/all" exact component={AllPayments} />
        {<Route path="/EditDetails/:id" exact component={EditPaymentDetails} />}
        {<Route path = "/" exact component = {Home} />}


      </div>
    </Router>
  );
}

export default App;
