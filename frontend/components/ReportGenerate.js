import jsPDF from "jspdf";
import "jspdf-autotable";

const GeneratePaymentReport = (payments) => {
  const doc = new jsPDF();

  const tableColumn = [
        "driverId",
        "noOfworkingDays",
        "totalTrips",
        "totalKm",
        "FixedPayment",
        "AdditionalPayment",
        "bonus",
        "total"
  ];
  const tableRows = [];

  payments.forEach((data) => {
    const paymentDetails = [
      data.driverId,
      data.noOfworkingDays,
      data.totalTrips,
      data.totalKm,
      data.FixedPayment,
      data.AdditionalPayment,
      data.bonus,
      data.total,
    ];
    tableRows.push(paymentDetails)
  });

  doc.text("Driver Payment Details Report",14,15)
  doc.autoTable(tableColumn,tableRows,{startY:20})
  doc.save("Driver Payment Report.pdf")
};

export default GeneratePaymentReport;