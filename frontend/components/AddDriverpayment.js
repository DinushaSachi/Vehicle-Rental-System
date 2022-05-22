import React,{useState} from "react";
import axios from "axios";


const AddDriverpayment =() => {


    const [driverId, setDriverId] = useState("");
    const [noOfworkingDays, setNoOfworkingDays] = useState("");
    const [totalTrips, setTotalTrips] = useState("");
    const [totalKm, setTotalKm] = useState("");
    const [FixedPayment, setFixedPayment] = useState("");
    const [AdditionalPayment, setAdditionalPayment] = useState("");
    const [bonus, setBonus] = useState("");
    const [total, setTotalPayment] = useState("");



    function sendData(e){
        e.preventDefault();

        const newDriverpayment ={
            driverId,
            noOfworkingDays,
            totalTrips,
            totalKm,
            FixedPayment,
            AdditionalPayment,
            bonus,
            total
        }

        axios.post("http://localhost:8060/driverpayment/add", newDriverpayment).then(() =>{
            alert("Payment Added")

            setDriverId(" ");
            setNoOfworkingDays(" ");
            setTotalTrips(" ");
            setTotalKm(" ");
            setFixedPayment(" ");
            setAdditionalPayment(" ");
            setBonus(" ");
            setTotalPayment(" ");


        }).catch((err)=>{
            alert(err)
        })
       
        
    }

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
            additional = 0;
        }

        if (parseInt(trips)  >= 20){
            bonus = 5000;
        }
        else{
            bonus = 0;
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

      


    return(

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

            <h1 style={{textAlign:'center', paddingBottom: '15px', paddingTop: '0px'}}> ADD DRIVER PAYMENTS</h1>


        </div>


        <form onSubmit = {sendData}>


            <div class="container"  >
                <div class="row">
                        <div class="col" style ={{backgroundColor: 'black', paddingBottom:'15px', marginRight: '25px'}}>

                            <div className="form-group" style = {{marginTop : '25px'}} >
                                <label for="driverId" style = {{color:'white'}}> Driver ID </label>
                                <input 
                                    type="text" className="form-control" id="driverId" placeholder="Enter DriverID" required
                                    style = {{marginTop : '10px'}} onChange={(e)=>{
                                    setDriverId(e.target.value);
                                }}/>

                            </div>

                            <div className="form-group">
                                <label for="noOfworkingDays" style = {{color:'white'}}> Number of Working Days </label>
                                <input 
                                    type="text" className="form-control" id="noOfworkingDays" placeholder="Enter the number of working days" required
                                    style = {{marginTop : '10px'}}  onChange={(e)=>{
                                    setNoOfworkingDays(e.target.value); 
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="totalTrips" style = {{color:'white'}}> Total Trips </label>
                                <input
                                    type="text" className="form-control" id="totalTrips" placeholder="Enter the total trips travelled" required
                                    style = {{marginTop : '10px'}} onChange={(e)=>{
                                    setTotalTrips(e.target.value);
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="totalKm" style = {{color:'white'}}> Total Killometers </label>
                                <input 
                                    type="text" className="form-control" id="totalKm" placeholder="Enter the total killometers travelled" required
                                    style = {{marginTop : '10px'}} onChange={(e)=>{
                                    setTotalKm(e.target.value);
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="FixedPayment" style = {{color:'white'}}> Fixed Payment </label>
                                <input 
                                    type="text" className="form-control" id="FixedPayment" placeholder="Enter the fixed payment" required
                                    style = {{marginTop : '10px'}} onChange={(e)=>{
                                    setFixedPayment(e.target.value);
                                }}/>

                            </div>


                            <button type="button" className="btn btn-primary" onClick = {Calculation} 
                                style = {{marginTop: '10px', backgroundColor: 'blue'}}
                            >Calculate</button>

                            <button type="button" className="btn btn-primary" onClick = {Clear} 
                                style = {{marginTop: '10px',marginLeft :'25px' ,backgroundColor: 'green', borderColor: 'green'}}
                            >Clear</button>
                        </div>


                        
                        <div class="col" style = {{backgroundColor: 'black', marginLeft :'25px'}} >
                            <div className="form-group" style ={{marginTop : '25px'}}>
                                <label for="AdditionalPayment" style = {{color:'white'}}> Additional Payments </label>
                                <input type="text" className="form-control" id="AdditionalPayment" value = {AdditionalPayment} readOnly
                                style = {{marginTop : '10px'}}   
                                /* onChange={(e)=>{
                                    setAdditionalPayment(e.target.value);
                                }} */  />

                            </div>

                            <div className="form-group">
                                <label for="bonus" style = {{color:'white'}}> Bonus </label>
                                <input type="text" className="form-control" id = "bonus" value = {bonus} style = {{marginTop : '10px'}}  readOnly
                                /* onChange={(e)=>{
                                    setBonus(e.target.value);
                                }} */ />

                            </div>


                            <div className="form-group">
                                <label for="total" style = {{color:'white'}}> Total Payments </label>
                                <input type="text" className="form-control" id="total" value = {total} style = {{marginTop : '10px'}} readOnly 
                                /* onChange={(e)=>{
                                    setTotalPayment(e.target.value);
                                }} */  />
                            </div>
                        </div>

                </div>


                

            </div>


            <button type="submit" className="btn btn-primary" onClick = {sendData} 
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
                        Submit</button>


        </form>
    </div>


    )


}


export default AddDriverpayment;

