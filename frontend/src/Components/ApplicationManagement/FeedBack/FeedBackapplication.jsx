import React, { useState } from "react";
import { Button } from "react-bootstrap";

import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const FeedBack = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [FeedBack, setFeedBack] = useState("");
  
  function sendData(e) {
    e.preventDefault();
    
  }
  
 

    const newApplication = {
      Name,
      Email,
      FeedBack,
    };

    axios
      .post("http://localhost:8070/Feedback/addfeedback", newApplication)
      .then(() => {
        console.log(newApplication);
        alert("successfully Submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  

  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
      <header>
        <h1>Leave Your FeedBack With US</h1>
        <p>
         
        </p>
      </header>
      <form
        onSubmit={(e) => {
          sendData(e);
        }}
      >
        {/* <!--  General --> */}
        <div class="form-group">
          <h2 class="heading">Application Form</h2>
          <div class="controls">
            <input
              type="text"
              id="fname"
              class="floatLabel"
              name="fname"
              required
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
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label for="email" class="active">
              Email
            </label>
          </div>
        </div>
       
        <div class="form-group">
          <h2 class="heading">FeedBack</h2>
          <div class="controls">
            <textarea
              name="comments"
              class="floatLabel"
              id="comments"
              required
              onChange={(event) => {
                setFeedBack(event.target.value);
              }}
            ></textarea>
            <label for="comments" class="active">
              Note down Your FeedBack
            </label>
          </div>
          
            <Button
              type="submit"
              style={{ width: "100px", height: "50px", marginRight: "20px" }}
            >
              Submit
            </Button>
        
          <Button style={{ width: "100px", height: "50px" }}>Cancel</Button>
        </div>
      </form>
    </div>
  );
;
            }
export default FeedBack;