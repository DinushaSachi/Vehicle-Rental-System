import react, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GeneratedriverReport from "../Report/reportGenerate";

//creating basic component
export default function AllDrivers() {
  const [AllDrivers, setAllDrivers] = useState([]);

  useEffect(() => {
    function AllDrivers() {
      axios
        .get("http://localhost:8070/ApplicationManagement/Companydriver/")
        .then((res) => {
          setAllDrivers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    AllDrivers();
  }, []);

  function DeleteDriver(id) {
    const conf = window.confirm("Do You Want to Delete this Driver?");
    if (conf == true) {
      axios
        .delete(
          "http://localhost:8070/ApplicationManagement/DeleteDriver/" + id
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

  console.log(AllDrivers);

  function GenerateReport(e) {
    GeneratedriverReport(AllDrivers);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginLeft: "400px" }}>
        All Drivers
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
          Get Driver Report
        </Button>
      </h1>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Gender</th>
            <th scope="col">Birthday</th>
            <th scope="col">Age</th>
            <th scope="col">NIC</th>
            <th scope="col">ContactNumber</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">District</th>
            <th scope="col">Experiences</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {AllDrivers.map((data) => {
            const bd = new Date(data.Birthday).toLocaleDateString();
            return (
              <tr>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.Gender}</td>
                <td>{bd}</td>
                <td>{data.Age}</td>
                <td>{data.NIC}</td>
                <td>{data.ContactNumber}</td>
                <td>{data.Email}</td>
                <td>{data.Address}</td>
                <td>{data.District}</td>
                <td>{data.Experiences}</td>
                <td style={{ width: "250px", textAlign: "center" }}>
                  <Link to={"/edit/" + data._id}>
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
                      DeleteDriver(data._id);
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
