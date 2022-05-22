import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//creating basic component
export default function VehicleOwners() {
  const [VehicleOwners, setVehicleOwners] = useState([]);

  useEffect(() => {
    function VehicleOwners() {
      axios
        .get("http://localhost:8070/ApplicationManagement/thirddPartyVehicleOwner/")
        .then((res) => {
          setVehicleOwners(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    VehicleOwners();
  }, []);

  function DeleteVehicleOwner(id) {
    const conf = window.confirm("Do You Want to Delete this Driver?");
    if (conf == true) {
      axios
        .delete("http://localhost:8070/ApplicationManagement/DeleteVehicleOwner/" + id)
        .then((res) => {
          alert("deleted");
          window.location.reload();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  console.log(VehicleOwners);

  return (

    <div>

      <h1>All Third Party Vehicle Owners</h1>

      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">NIC</th>
            <th scope="col">ContactNumber </th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">District</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {VehicleOwners.map((data) => {
            return (
              <tr>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.NIC}</td>
                <td>{data.ContactNumber}</td>
                <td>{data.Email}</td>
                <td>{data.Address}</td>
                <td>{data.District}</td>

                <td style={{ width: "250px", textAlign: "center" }}>
                  <Link to={"/eown/" + data._id}>
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
                      DeleteVehicleOwner(data._id);
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
