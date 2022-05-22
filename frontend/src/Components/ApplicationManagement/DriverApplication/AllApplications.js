import react, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

//creating basic component
export default function AllApplications() {
  const [driverApplications, setdriverApplications] = useState([]);

  const [ID, setid] = useState();
  const [FirstName, setFname] = useState();
  const [LastName, setLname] = useState();
  const [Gender, setGender] = useState("male");
  const [Age, setAge] = useState();
  const [Birthday, setBirthday] = useState();
  const [NIC, setnic] = useState();
  const [ContactNumber, setContactNo] = useState();
  const [Email, setEmail] = useState();
  const [Address, setAddress] = useState();
  const [District, setDistrict] = useState("Colombo");
  const [Experiences, setExpeirences] = useState();

  useEffect(() => {
    function getApplications() {
      axios
        .get("http://localhost:8070/ApplicationManagement/")
        .then((res) => {
          setdriverApplications(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getApplications();
  }, []);

  // Entroll Function
  function Entroll(_id) {
    console.log(_id);
    const newApplication = {
      FirstName,
      LastName,
      Gender,
      Age,
      Birthday,
      NIC,
      ContactNumber,
      Email,
      Address,
      District,
      Experiences,
    };

    console.log(newApplication);
    axios
      .post("http://localhost:8070/ApplicationManagement/addDriver", newApplication)
      .then(() => {
        console.log(newApplication);
      })
      .then(() => {
        axios
          .delete("http://localhost:8070/ApplicationManagement/delete/" + _id)
          .then((res) => {
            console.log(res);
            alert("successfully entrolled");

            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function RejectApplication(e,_id){
    axios
    .delete("http://localhost:8070/ApplicationManagement/delete/" + _id)
    .then((res) => {
      console.log(res);
      alert("Application Rejected");

      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <h1>All Applications</h1>

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
          {driverApplications.map((data) => {
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
                  <Button
                    style={{ width: "60px" }}
                    size="sm"
                    variant="primary"
                    onClick={() => {
                      setid(data._id);
                      setFname(data.FirstName);
                      setLname(data.LastName);
                      setGender(data.Gender);
                      setBirthday(data.Birthday);
                      setAge(data.Age);
                      setnic(data.NIC);
                      setContactNo(data.ContactNumber);
                      setEmail(data.Email);
                      setAddress(data.Address);
                      setDistrict(data.District);
                      setExpeirences(data.Experiences);
                      Entroll(data._id);
                    }}
                  >
                    Entroll
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    style={{ width: "60px", marginLeft: "10px" }}
                    onClick={(e) => {
                      RejectApplication(e,data._id)
                    }}
                  >
                    Reject
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
