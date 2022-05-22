import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";



const generatePDReport = booking => {
  const doc = new jsPDF();
const tableColumn = [
    "PickupDate",
    "CustomerName",
    "Email",
    "Passengers",
    "VehicleType",
    "Pick up",
    "Drop off",
  ];
  const tableRows = [];

  booking.forEach((data) => {
    const BookingDetails = [
        data.PickupDate,
        data.CustomerName,
        data.Email,
        data.Passengers,
        data.VehicleType,
        data.PickupLocation,
        data.DropLocation,
    ];
    tableRows.push(BookingDetails);
  });
  doc.autoTable(tableColumn,tableRows,{startY:20});
  doc.text("Booking Details",40,15);
  doc.save('AllBookingReport.pdf');

 
};

export default generatePDReport;

