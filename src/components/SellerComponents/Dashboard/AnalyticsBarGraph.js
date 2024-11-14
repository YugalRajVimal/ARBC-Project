import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import dayjs from "dayjs"; // For date manipulation

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsBarGraph = (props) => {
  const { inquiries } = props;

  useEffect(() => {
    console.log("Inquiries:", inquiries);
  }, [inquiries]);

  const categorizeInquiriesByDaysAndStatus = (inquiries, status) => {
    const currentDate = dayjs();
    const intervals = [0, 7, 14, 21, 28, 30];
    const categorizedCounts = Array(intervals.length - 1).fill(0);

    inquiries
      .filter((inquiry) => inquiry.status === status)
      .forEach((inquiry) => {
        const inquiryDate = dayjs(inquiry.createdAt);
        const daysDifference = currentDate.diff(inquiryDate, "day");
        console.log(
          `Inquiry Date: ${inquiryDate}, Days Difference: ${daysDifference}, Status: ${status}`
        );

        for (let i = 0; i < intervals.length - 1; i++) {
          if (daysDifference >= intervals[i] && daysDifference < intervals[i + 1]) {
            categorizedCounts[i] += 1;
            break;
          }
        }
      });

    return categorizedCounts;
  };

  // Generate data for each status
  var totalData = inquiries ? categorizeInquiriesByDaysAndStatus(inquiries, "Pending") : [];
  const activeData = inquiries ? categorizeInquiriesByDaysAndStatus(inquiries, "Active") : [];
  const completedData = inquiries ? categorizeInquiriesByDaysAndStatus(inquiries, "Completed") : [];

  //Totla Data is Sum of all the data
  totalData = totalData.map((item, index) => {
    return item + activeData[index] + completedData[index];
  });
  
  console.log("Total Inquiries Data:", totalData);
  console.log("Active Inquiries Data:", activeData);
  console.log("Completed Inquiries Data:", completedData);

  const data = {
    labels: ["1-7 days", "8-14 days", "15-21 days", "22-28 days", "29-30 days"],
    datasets: [
      {
        label: "Total Inquiries",
        data: totalData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Active Inquiries",
        data: activeData,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Completed Inquiries",
        data: completedData,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Inquiries Analytics" },
    },
    scales: {
      x: { title: { display: true, text: "Week Intervals" } },
      y: { title: { display: true, text: "Number of Inquiries" } },
    },
  };

  return <Bar data={data} options={options} />;
};

export default AnalyticsBarGraph;
