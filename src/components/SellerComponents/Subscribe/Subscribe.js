import React from "react";

const Subscribe = (props) => {
    const {handlePayment, orderDetails} = props;
  return (
    <div className="absolute w-[300px] top-1/2 left-1/2 z-20 -translate-y-1/2 -translate-x-1/2 bg-[#fdfef4] shadow-black shadow-xl rounded-md p-4 flex flex-col shadow-lg">
      <h1 className="text-center text-xl font-medium mb-4">
        Subscribe for more Inquiries
      </h1>
      <hr className="border-[0.5px] border-black mb-4" />
      <p className="text-xs"><span className="font-semibold">Order Id:</span> {orderDetails.orderId}</p>
      <hr className="border-[0.5px] border-black my-4" />
      <div className="mb-2">
        <span className="font-semibold">Name:</span> {orderDetails.customerName}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Email:</span> {orderDetails.customerEmail}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Phone:</span> {orderDetails.customerPhone}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Payment Amount:</span> Rs.{orderDetails.orderAmount}
      </div>
      <button onClick={handlePayment} className="mt-auto  bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition-colors">
        Pay
      </button>
    </div>
  );
};

export default Subscribe;
