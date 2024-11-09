// src/components/SellerComponents/ProductStatusChart/ProductStatusChart.js

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductStatusChart = () => {
  const data = {
    labels: ["Available", "ComingSoon", "OutOfStock"],
    datasets: [
      {
        label: "Product Status",
        data: [10, 5, 2], // Example data, replace with dynamic data
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)", // Available
          "rgba(255, 206, 86, 0.2)", // ComingSoon
          "rgba(255, 99, 132, 0.2)", // OutOfStock
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // Available
          "rgba(255, 206, 86, 1)", // ComingSoon
          "rgba(255, 99, 132, 1)", // OutOfStock
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
      
    },
    cutout:"70%",
    
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-3/4">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex w-full justify-around mt-4">
        <div className="flex flex-col items-center">
          <span className="text-blue-500">● Available</span>
          <span>10</span> {/* Replace with dynamic count */}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-500">● ComingSoon</span>
          <span>5</span> {/* Replace with dynamic count */}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-red-500">● OutOfStock</span>
          <span>2</span> {/* Replace with dynamic count */}
        </div>
      </div>
    </div>
  );
};

export default ProductStatusChart;
