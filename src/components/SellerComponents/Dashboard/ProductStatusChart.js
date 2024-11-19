import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getProductsStatus } from "../../../api/SellerAPI/sellerAPI";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductStatusChart = () => {
  const [productsStatus, setProductsStatus] = useState([]);

  const data = {
    labels: ["Available", "Coming Soon", "Out of Stock"],
    datasets: [
      {
        label: "Product Status",
        data: [
          productsStatus.availableProducts
            ? productsStatus.availableProducts
            : 0,
          productsStatus.comingSoonProducts
            ? productsStatus.comingSoonProducts
            : 0,
          productsStatus.outOfStockProducts
            ? productsStatus.outOfStockProducts
            : 0,
        ], // Example data, replace with dynamic data
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

  useEffect(() => {
    // Fetch top categories from API
    getProductsStatus().then((response) => {
      console.log("----",response);
      if (response.status === 200) {
        setProductsStatus(response.data);
      }else{
        setProductsStatus({
          availableProducts: 0,
          comingSoonProducts: 0,
          outOfStockProducts: 0,
        });
      }
    });
  }, []);

  if (!productsStatus) {
    return <h1>Data not found</h1>;
  }

  return (
    <div className="p-4 h-80 w-full shadow-md bg-white rounded-lg">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-full h-2/3">
          <Doughnut data={data} options={options} className="w-full h-full" />
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="flex flex-col items-center">
            <span className="text-teal-500">● Available</span>
            <span>{productsStatus.availableProducts}</span>{" "}
            {/* Replace with dynamic count */}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-yellow-500">● Coming Soon</span>
            <span>{productsStatus.comingSoonProducts}</span>{" "}
            {/* Replace with dynamic count */}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-red-500">● Out of Stock</span>
            <span>{productsStatus.outOfStockProducts}</span>{" "}
            {/* Replace with dynamic count */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatusChart;
