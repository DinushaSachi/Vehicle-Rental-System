import React from "react";
import "./CusFooter.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Car Castle</h4>
            <h5 className="list-unstyled">
              <li>Colombo Street 7</li>
              <li>Sri Lanka</li>
             
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Email</h4>
            <ui className="list-unstyled">
              <li>Carcastle@gmail.com</li>
              
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Phone Numbers</h4>
            <ui className="list-unstyled">
              <li>081-5647984</li>
              <li>075-2908654</li>
             
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;