import react, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GenerateThirdPartyVehicleReport from "../Report/ThirdPartyVehicleReport";

//creating basic component
export default function ThirdPartyVehicles() {
  const [AllThirdPartyVehicles, setAllThirdPartyVehicles] = useState([]);

  useEffect(() => {
    function AllThirdPartyVehicles() {
      axios
        .get("http://localhost:8070/ApplicationManagement/ThirdParty_Vehicle/")
        .then((res) => {
          setAllThirdPartyVehicles(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    AllThirdPartyVehicles();
  }, []);

  function DeleteAThirdPartyVehicle(id) {
    const conf = window.confirm("Do You Want to Delete this Vehicle?");
    if (conf == true) {
      axios
        .delete(
          "http://localhost:8070/ApplicationManagement/DeleteTvehicle/" + id
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

  console.log(AllThirdPartyVehicles);

  function GenerateReport(e) {
    GenerateThirdPartyVehicleReport(AllThirdPartyVehicles);
  }

  return (
    <div>
      <h1 style={{ marginLeft: "400px" }}>
        All Third Party Vehicles
        <Button
          size="sm"
          variant="danger"
          style={{
            width: "200px",
            height: "30px",
            marginLeft: "200px",
            marginTop: "20px",
            marginRight: "20px",
          }}
          onClick={(e) => {
            GenerateReport();
          }}
        >
          Get Third Party Vehicle Report
        </Button>
      </h1>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">VehicleModel</th>
            <th scope="col">Category</th>
            <th scope="col">VehicleNumber</th>
            <th scope="col">Manufactured Year </th>
            <th scope="col">FuelType</th>
            <th scope="col">Status</th>
            <th scope="col">FileName</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {AllThirdPartyVehicles.map((data) => {
            return (
              <tr>
                <td>{data.vModel}</td>
                <td>{data.vCategory}</td>
                <td>{data.vehicleNumber}</td>
                <td>{data.manufacturedYear}</td>
                <td>{data.fuelType}</td>
                <td>{data.vStatus}</td>
                <td>{data.fileName}</td>

                <td style={{ width: "250px", textAlign: "center" }}>
                  <Link to={"/evehi/" + data._id}>
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
                      DeleteAThirdPartyVehicle(data._id);
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
