import React, {useState, useEffect} from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GeneratePaymentReport from "./ReportGenerate";



//Creating the basic component
export default function AllPayments(){

    const [AllPayments, setAllPayments] = useState([]);   //Payment array

    const [Id, setId] = useState("");
    const [driverId, setDriverId] = useState("");
    const [noOfworkingDays, setNoOfworkingDays] = useState("");
    const [totalTrips, setTotalTrips] = useState("");
    const [totalKm, setTotalKm] = useState("");
    const [FixedPayment, setFixedPayment] = useState("");
    const [AdditionalPayment, setAdditionalPayment] = useState("");
    const [bonus, setBonus] = useState("");
    const [total, setTotalPayment] = useState("");



    //show all payments
    useEffect(() => {
        function AllPayments(){
            axios.get("http://localhost:8060/driverpayment/").then((res) =>{
                setAllPayments(res.data);
                
            }).catch((err) =>{
                alert(err.message);
            })
        }
        AllPayments();

    }, []);

    //Delete payment function

    function DeletePayment(e,_id) {
        const conf = window.confirm("Do You Want to Delete this Payment?");
        if (conf == true) {
          axios
            .delete("http://localhost:8060/driverpayment/delete/" + _id)
            .then((res) => {
              alert("deleted");
              window.location.reload();
            })
            .catch((err) => {
              alert(err.message);
            });
        }
      }
    
      console.log(AllPayments);     

      //Generate report function
      function GenerateReport() {
        GeneratePaymentReport(AllPayments);
      }

    return (

        <div className = "container">

        <div>

            {/*logo*/}
            <img 
            
                src ="https://www.cellutrak.ca/wp-content/uploads/2020/11/car-rental.png" 
                style = {{
                    alignItems:"left",
                    width: '200px',
                    height : '120px',
                    paddingTop: '20px',
                    paddingLeft : '10px',
                    paddingBottom : '5px'
                
                }}
                alt = ""
                className = "logo"
                
            />

            <h1 style={{textAlign:'center', paddingBottom: '20px', paddingTop: '0px', paddingLeft: '500px', paddingRight:'100px'}}>
                ALL PAYMENTS
                <Button
                    size="sm"
                    variant="danger"
                    style={{
                        
                        width: "200px",
                        height: "40px",
                        marginLeft: "200px",
                        marginTop: "20px",
                        marginRight: "10px",
                        backgroundColor: "green",
                        borderBlockColor: "green"
                        
                    }}
                    onClick={(e) => {
                        GenerateReport();
                    }}
                >
                Get Payment Report
                </Button>
                
                
                </h1>


        </div>



            <table className="table table-dark table-striped" style = {{marginTop: '25px'}}>
                <thead>
                    <tr>
                    <th scope="col">driverId</th>
                    <th scope="col">noOfworkingDays</th>
                    <th scope="col">totalTrips</th>
                    <th scope="col">totalKm</th>
                    <th scope="col">FixedPayment</th>
                    <th scope="col">AdditionalPayment</th>
                    <th scope="col"> bonus</th>
                    <th scope="col">total</th>
                    <th scope="col">Decision</th>

                    </tr>
                </thead>

                <tbody>
                   
                    {AllPayments.map((data) => {
                        return (

                             <tr>
                                <td>{data.driverId}</td>
                                <td>{data.noOfworkingDays}</td>
                                <td>{data.totalTrips}</td>
                                <td>{data.totalKm}</td>
                                <td>{data.FixedPayment}</td>
                                <td>{data.AdditionalPayment}</td>
                                <td>{data.bonus}</td>
                                <td>{data.total}</td> 

                                <td style={{ width: '250px', texrAlign: 'center' }}>
                                    <Link to={"/EditDetails/" + data._id}>
                                        <Button
                                            size="sm"
                                            variant="primary"
                                            style={{ width: "60px", marginLeft: "10px" }}
                                            /* onClick = {() => {
                                                setId(data._id);
                                                setDriverId(data.driverId);
                                                setNoOfworkingDays(data.noOfworkingDays);
                                                setTotalTrips(data.totalTrips);
                                                setTotalKm(data.totalKm);
                                                setFixedPayment(data.FixedPayment);
                                                setAdditionalPayment(data.AdditionalPayment);
                                                setBonus(data.bonus);
                                                setTotalPayment(data.total);

                                                EditPayment(data._id);
                                            }} */
                                        >
                                            Edit
                                        </Button>
                                    </Link>

                                    <Button
                                        size="sm"
                                        variant="danger"
                                        style={{ width: "60px", marginLeft: "10px" }}
                                        onClick={(e) => {
                                            DeletePayment(e,data._id);
                                        } }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
 
                                        
                            )
                    
                    })}
                    
                    

                    
                                        
                    
                </tbody>

  
            </table>


        </div>
    ); 
}
