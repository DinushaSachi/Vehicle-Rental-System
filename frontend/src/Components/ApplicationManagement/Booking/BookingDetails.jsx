import react, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GenerateBookingReport from "../Report/BookingReport";
 


//creating basic component
export default function AllBooking() {
  const [AllBooking, setAllBooking] = useState([]);
  const [searchInput,setsearchInput] = useState("");
  const[filteredResults,setFilteredResults]=useState([]);

  


  useEffect(() => {
    function AllBooking() {
      axios
        .get("http://localhost:8070/Booking/Companybooking/")
        .then((res) => {
          setAllBooking(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    AllBooking();
  }, []);

  function DeleteBooking(id) {
    const conf = window.confirm("Do You Want to Delete this Booking?");
    if (conf == true) {
      axios
        .delete(
          "http://localhost:8070/Booking/DeleteBooking/" + id
        )
        .then((res) => {
          alert("deleted");
          window.location.reload();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

 
  const filterItems = AllBooking.filter((item) =>

  item.CustomerName.toLowerCase().includes(searchInput.toLowerCase())

);
/*const searchHandle = async () => {
  try {
    const Booking = await axios({
      method:'GET',url:`http://localhost:8070/Booking/Companybooking/`
    })
    filterItems(Booking,searchInput)
    
  } catch (error) {
    alert(error)
    
  }
}
*/
  console.log(AllBooking);

  function GenerateReport(e) {
    GenerateBookingReport(AllBooking);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginLeft: "400px" }}>
        All Bookings
        
        <Button
          size="sm"
          variant="danger"
          style={{
            width: "200px",
            height: "30px",
            marginLeft: "300px",
            marginTop: "20px",
            marginRight: "20px",
          }}
          onClick={(e) => {
            GenerateReport();
          }}
        
        >
          Get Booking Report
          </Button>
          <input  onChange={(e) =>setsearchInput(e.target.value)}  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" name="searchitem" aria-label="Search" aria-describedby="button-addon2"
          
      />




      </h1>
      <table class="table table-striped table-dark">

        <thead>
          <tr>
            <th scope="col">PickupLocation</th>
            <th scope="col">PickupDate</th>
            <th scope="col">PickupTime</th>
            <th scope="col">DropLocation</th>
            <th scope="col">Passengers</th>
            <th scope="col">VehicleType</th>
            <th scope="col">CustomerName</th>
            <th scope="col">Email</th>
            <th scope="col">MobileNo</th>
            <th scope="col">Message</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {filterItems.map((data) => {
            return (
              <tr>
                <td>{data.PickupLocation}</td>
                <td>{data.PickupDate}</td>
                <td>{data.PickupTime}</td>
                <td>{data.DropLocation}</td>
                <td>{data.Passengers}</td>
                <td>{data.VehicleType}</td>
                <td>{data.CustomerName}</td>
                <td>{data.Email}</td>
                <td>{data.MobileNo}</td>
                <td>{data.Message}</td>
                <td style={{ width: "250px", textAlign: "center" }}>
                  <Link to={"/editBooking/" + data._id}>
                    <Button
                      size="sm"
                      variant="primary"
                      style={{ width: "60px", marginLeft: "10px" }}
                    >
                      Edit
                    </Button>
                  </Link>

                  <Button
                    size="sm"
                    variant="danger"
                    style={{ width: "60px", marginLeft: "10px" }}
                    onClick={(e) => {
                      DeleteBooking(data._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
