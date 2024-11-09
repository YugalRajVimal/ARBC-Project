import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductStatusChart = () => {
  const data = {
    labels: ["Available", "Coming Soon", "Out of Stock"],
    datasets: [
      {
        label: "Product Status",
        data: [10, 5, 2], // Example data, replace with dynamic data
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)", // Available
          "rgba(255, 206, 86, 0.2)", // Coming Soon
          "rgba(255, 99, 132, 0.2)", // Out of Stock
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // Available
          "rgba(255, 206, 86, 1)", // Coming Soon
          "rgba(255, 99, 132, 1)", // Out of Stock
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: "70%",
  };

  return (
    <div className="p-4 h-80 w-full shadow-md bg-white rounded-lg">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-full h-2/3">
          <Doughnut data={data} options={options} className="w-full h-full" />
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="flex flex-col items-center">
            <span className="text-teal-500">● Available</span>
            <span>10</span> {/* Replace with dynamic count */}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-500">● Coming Soon</span>
            <span>5</span> {/* Replace with dynamic count */}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-red-500">● Out of Stock</span>
            <span>2</span> {/* Replace with dynamic count */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatusChart;
