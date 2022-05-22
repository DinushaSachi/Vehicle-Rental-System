import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";


const generatePDReport = thirdPartyVehicle => {
  const doc = new jsPDF();
const tableColumn = [
    "Vehicle Model",
    "Category",
    "Vehicle Number",
    "Manufactured Year",
    "Fuel Type",
    "Status",
  ];
  const tableRows = [];

  thirdPartyVehicle.forEach((data) => {
    const thirdPartyVehicleDetails = [
      data.vModel,
      data.vCategory,
      data.vehicleNumber,
      data.manufacturedYear,
      data.fuelType,
      data.vStatus,
    ];
    tableRows.push(thirdPartyVehicleDetails);
  });
  doc.autoTable(tableColumn,tableRows,{startY:20});
  doc.text("Registered Vehicles",40,15);
  doc.save('VehicleReport.pdf');

 
};

export default generatePDReport;
