import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import axios from "axios";
import { useParams } from "react-router";

const EditFeedbackDetails = () => {
  const { id } = useParams();

  const [FeedbackDetails, setFeedbackDetails] = useState([]);

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Feedback, setFeedback] = useState();

  function UpdateData(event) {
    event.preventDefault();

    const newApplication = {
      Name,
      Email,
      Feedback,
    };

    console.log(newApplication);

    axios
      .put("http://localhost:8070/Feedback/Updatefeedback/" + id, newApplication)
      .then(() => {
        console.log(newApplication);
        alert("successfully Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Get Driver Details To Edit Form

  useEffect(() => {
    function getFeedbackDetails() {
      axios
        .get("http://localhost:8070/driverApp/Companydriver/" + id)
        .then((res) => {
          setFeedbackDetails(res.data);
          setName(res.data.Name);
          setEmail(res.data.Email);
          setFeedback(res.data.Feedback);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getFeedbackDetails();
  }, []);

  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
      <form>
        {/* <!--  General --> */}
        <br />
        <div class="form-group">
          <h2 class="heading">Edit Details</h2>
          <br />
          <div class="controls">
            <input
              type="text"
              id="fname"
              class="floatLabel"
              name="fname"
              defaultValue={FeedbackDetails.FirstName}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label for="name" class="active">
                Name
            </label>
          </div>
         
          <div class="controls">
            <input
              type="email"
              id="email"
              class="floatLabel"
              name="email"
              defaultValue={FeedbackDetails.Email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label for="email" class="active">
              Email
            </label>
          </div>
        </div>
        <div class="controls">
          <input
            type="text"
            id="address"
            class="floatLabel"
            name="address"
            defaultValue={FeedbackDetails.Address}
            onChange={(event) => {
              setFeedback(event.target.value);
            }}
          />
          <label for="address" class="active">
               Feedback
          </label>
        </div>
        
        <div class="form-group">
          <Button
            style={{ width: "100px", height: "50px", marginRight: "20px" }}
            type="submit"
            onClick={(e) => {
              UpdateData(e);
            }}
          >
            Update
          </Button>
          <Button
            style={{ width: "100px", height: "50px", marginRight: "20px" }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
export default EditFeedbackDetails;
