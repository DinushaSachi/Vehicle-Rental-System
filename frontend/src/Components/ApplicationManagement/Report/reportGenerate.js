import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const generatePDReport = drivers => {
  const doc = new jsPDF();
const tableColumn = [
    "First Name",
    "Last Name",
    "Gender",
    "Age",
    "NIC",
    "ContactNo",
    "Email",
    "District",
  ];
  const tableRows = [];

  drivers.forEach((data) => {
    const driversDetails = [
      data.FirstName,
      data.LastName,
      data.Gender,
      data.Age,
      data.NIC,
      data.ContactNumber,
      data.Email,
      data.District,
    ];
    tableRows.push(driversDetails)
  });
  doc.autoTable(tableColumn,tableRows,{startY:20});
  doc.text("Driver Details",40,15);
  doc.save('AllDriverReport.pdf');

  
};

export default generatePDReport;