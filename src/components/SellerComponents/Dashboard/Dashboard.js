import React from "react";
import AnalyticsBarGraph from "./AnalyticsBarGraph";
import ProductStatusChart from "./ProductStatusChart";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[65%] h-full mx-1 p-2">
        <div className="h-[40%]">
          <h5>Dashboard</h5>
          <h3 className="text-xl">Welcome, User!</h3>
          <div className="h-[40%]  p-1 flex justify-around">
            <div className="h-full w-[48%] bg-white p-1 rounded-md shadow-md">
              Total Received Inquiries
              <br />
              <span className="text-2xl pl-2">0</span>
            </div>
            <div className="h-full w-[48%] bg-white p-1 rounded-md shadow-md">
              Active Inquiries
              <br />
              <span className="text-2xl pl-2">0</span>
            </div>
          </div>

          <div className="h-[40%] p-1 flex justify-around">
            <div className="h-full w-[48%] bg-white p-1 rounded-md shadow-md">
              Completed Inquiries
              <br />
              <span className="text-2xl pl-2">0</span>
            </div>
            <div className="h-full w-[48%] p-1"></div>
          </div>
        </div>
        <div className="h-[60%] bg-white flex justify-center items-center p-2 shadow-md">
          <AnalyticsBarGraph />
        </div>
      </div>
      <div className="w-[35%] h-full mx-1">
        <div className="p-2 h-1/2 shadow-md bg-white">
        <ProductStatusChart />
        </div>
        
        <div className="h-1/2  text-center flex flex-col justify-between p-2">
            <div className="flex justify-between p-2">
                <h5>My products</h5>
                <button>
                    View All
                </button>
            </div>
            <button className="text-xl text-white px-4 py-1 bg-blue-900 rounded-md">
                Add New Product
            </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
