import react, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//creating basic component
export default function AllFeedback() {
  const [AllFeedback, setAllFeedback] = useState([]);

  useEffect(() => {
    function AllFeedback() {
      axios
        .get("http://localhost:8070/Feedback/CompanyFeedback/")
        .then((res) => {
          setAllFeedback(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    AllFeedback();
  }, []);

  function DeleteFeedback(id) {
    const conf = window.confirm("Do You Want to Delete this Driver?");
    if (conf == true) {
      axios
        .delete("http://localhost:8070/Feedback/DeleteFeedback/" + id)
        .then((res) => {
          alert("deleted");
          window.location.reload();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  console.log(AllFeedback);

  return (
    <div>
      <h1>All FeedBack</h1>

      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">FeedBack</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
        
          {AllFeedback.map((data) => {
            return (
              <tr>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Feedback}</td>
                <td style={{ width: "250px", textAlign: "center" }}>
                  <Link to={"/EditDetails/" + data._id}>
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
                      DeleteFeedback(data._id);
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
