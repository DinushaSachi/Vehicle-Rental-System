import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";

const EditPaymentDetails = () => {
    const { id } = useParams();
  
    const [PaymentDetails, setPaymentDetails] = useState([]);
  
    const [driverId, setDriverId] = useState();
    const [noOfworkingDays, setNoOfworkingDays] = useState();
    const [totalTrips, setTotalTrips] = useState();
    const [totalKm, setTotalKm] = useState();
    const [FixedPayment, setFixedPayment] = useState();
    const [AdditionalPayment, setAdditionalPayment] = useState();
    const [bonus, setBonus] = useState();
    const [total, setTotalPayment] = useState();


    function UpdateData(event) {
      event.preventDefault();
  
      const newApplication = {
        driverId,
        noOfworkingDays,
        totalTrips,
        totalKm,
        FixedPayment,
        AdditionalPayment,
        bonus,
        total,
      };
  
      console.log(newApplication);
  
      axios
        .put("http://localhost:8060/driverpayments/update/" + id, newApplication)
        .then(() => {
          console.log(newApplication);
          alert("successfully Updated");

          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    // Get Payment Details To Edit Form
  
    useEffect(() => {
      function getPaymentDetails() {
        axios
          .get("http://localhost:8060/driverpayments/get/" + id)
          .then((res) => {
            setPaymentDetails(res.data);
            setDriverId(res.data.driverId);
            setNoOfworkingDays(res.data.noOfworkingDays);
            setTotalTrips(res.data.totalTrips);
            setTotalKm(res.data.totalKm);
            setFixedPayment(res.data.FixedPayment);
            setAdditionalPayment(res.data.AdditionalPayment);
            setBonus(res.data.bonus);
            setTotalPayment(res.data.total);
            
          })
          .catch((err) => {
            console.log(err);
          });
      }
  
      getPaymentDetails();
    }, []);


    //Calculate the payment
    const Calculation = (e) =>{
      e.preventDefault();

      let fixed =document.querySelector('#FixedPayment').value
      let trips =document.querySelector('#totalTrips').value
      let km =document.querySelector('#totalKm').value

  
      let additional;
      let bonus;
      let total;

      
      if (parseInt(km) >= 300){
          additional = 8000;
      }

      else if (parseInt(km)  >= 200){
          additional = 5000;
      }
      else if (parseInt(km)  >= 100){
          additional = 3000;
      }

      else{
          additional = 1000;
      }

      if (parseInt(trips)  >= 20){
          bonus = 5000;
      }
      else{
          bonus = 1000;
      }

      total = (parseInt(fixed) + additional + bonus);

      setAdditionalPayment(additional);
      setBonus(bonus);
      setTotalPayment(total);


  }

  /* clear function */
  const Clear=(e)=>{

    e.preventDefault();

    

    document.querySelector('form').reset();

    


  }




  
    return (

      <div style ={{paddingLeft : '100px', paddingRight: '100px', paddingBottom : '0px'}} >

        <div>
            <img 
            
                src ="https://www.cellutrak.ca/wp-content/uploads/2020/11/car-rental.png" 
                style = {{
                    alignItems:"left",
                    width: '230px',
                    height : '110px',
                    paddingTop: '20px',
                    paddingLeft : '50px',
                    paddingBottom : '0px'
                
                }}
                alt = ""
                className = "logo"
                
            />

            <h1 style={{textAlign:'center', paddingBottom: '15px', paddingTop: '0px'}}>EDIT DRIVER PAYMENTS</h1>


        </div>

        {/*Add payment form*/}

        <form >


            <div class="container"  >
                <div class="row">
                        <div class="col" style ={{backgroundColor: 'black', paddingBottom:'15px', marginRight: '25px'}}>

                            <div className="form-group" style = {{marginTop : '25px'}} >
                                <label for="driverId" style = {{color:'white'}}> Driver ID </label>

                                <input 
                                    type="text" 
                                    
                                    className="form-control" 
                                    id="driverId" 
                                    name= "driverId"
                                    defaultValue = {PaymentDetails.driverId}
                                    style = {{marginTop : '10px'} } 
                                    onChange={(event)=>{
                                    setDriverId(event.target.value); 
                                }}
                                />

                            </div>

                            <div className="form-group">
                                <label for="noOfworkingDays" style = {{color:'white'}}> Number of Working Days </label>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="noOfworkingDays" 
                                    defaultValue = {PaymentDetails.noOfworkingDays}  
                                    style = {{marginTop : '10px'}}  
                                    onChange={(event)=>{
                                    setNoOfworkingDays(event.target.value); 
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="totalTrips" style = {{color:'white'}}> Total Trips </label>

                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="totalTrips" 
                                  defaultValue = {PaymentDetails.totalTrips}
                                  style = {{marginTop : '10px'}} 
                                  onChange={(e)=>{
                                    setTotalTrips(e.target.value);
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="totalKm" style = {{color:'white'}}> Total Killometers </label>

                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="totalKm"
                                  defaultValue = {PaymentDetails.totalKm} 
                                  style = {{marginTop : '10px'}} 
                                  onChange={(e)=>{
                                    setTotalKm(e.target.value);
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="FixedPayment" style = {{color:'white'}}> Fixed Payment </label>

                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="FixedPayment" 
                                  defaultValue = {PaymentDetails.FixedPayment} 
                                  style = {{marginTop : '10px'}} 
                                  onChange={(e)=>{
                                    setFixedPayment(e.target.value);
                                }}/>

                            </div>


                            <Button type="button" className="btn btn-primary" onClick = {Calculation} 
                                style = {{marginTop: '10px', backgroundColor: 'blue'}}
                            >Calculate</Button>

                            <Button type="button" className="btn btn-primary" onClick = {Clear} 
                                style = {{marginTop: '10px',marginLeft :'25px' ,backgroundColor: 'green', borderColor: 'green'}}
                            >Clear</Button>
                        </div>

                      {/*Calculated payments form*/}
                        
                        <div class="col" style = {{backgroundColor: 'black', marginLeft :'25px'}} >
                            <div className="form-group" style ={{marginTop : '25px'}}>
                                <label for="AdditionalPayment" style = {{color:'white'}}> Additional Payments </label>

                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="AdditionalPayment" 
                                  value = {AdditionalPayment} readOnly
                                style = {{marginTop : '10px'}}   
                                  />

                            </div>

                            <div className="form-group">
                                <label for="bonus" style = {{color:'white'}}> Bonus </label>

                                <input
                                 type="text" 
                                 className="form-control" 
                                 id = "bonus" 
                                 value = {bonus} 
                                 style = {{marginTop : '10px'}}  readOnly
                                 />

                            </div>


                            <div className="form-group">
                                <label for="total" style = {{color:'white'}}> Total Payments </label>

                                <input
                                 type="text" 
                                 className="form-control" 
                                 id="total" value = {total} 
                                 style = {{marginTop : '10px'}} readOnly 
                                  />
                            </div>
                        </div>

                </div>


                

            </div>


            <Button type="submit" className="btn btn-primary" onClick = {UpdateData} 
                        style = {{
                            marginTop: '10px', 
                            marginBottom : '5px',
                            backgroundColor: 'red', 
                            
                            borderColor:'red',
                            marginLeft:'83%',
                            
                            width : '200px',
                            height : '40px'
                        }} 
                    
                    >
                        Update</Button>


        </form>
          
        
      </div>
    );
  };
  export default EditPaymentDetails;
  