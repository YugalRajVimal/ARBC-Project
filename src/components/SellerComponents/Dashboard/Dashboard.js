import React, { useEffect, useState } from "react";
import AnalyticsBarGraph from "./AnalyticsBarGraph";
import ProductStatusChart from "./ProductStatusChart";
import axios from "axios";
import { getProductsStatus } from "../../../api/SellerAPI/sellerAPI";

const Dashboard = ({ setSelectedPage }) => {
  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [productStatus, setProductStatus] = useState({});
  const [loading, setLoading] = useState(true);

  const navigateToAddNewProduct = () => setSelectedPage("AddNewProduct");
  const navigateToAllProducts = () => setSelectedPage("MyProducts");

  useEffect(() => {
    // Fetch Seller Products
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/product/get-seller-products`,
          {
            headers: { Authorization: `${localStorage.getItem("token")}` },
          }
        );
        if (response.status === 200) {
          setProducts(response.data);
        }
        setProducts([]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Fetch Inquiries Data
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/get-inquiries`,
          {
            headers: { Authorization: `${localStorage.getItem("token")}` },
          }
        );

        if (response.status === 200 || response.status === 209) {
          setInquiries(response.data.inquiries);
        }
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    // Fetch Product Status
    const fetchProductStatus = async () => {
      const statusResponse = await getProductsStatus();
      if (statusResponse) {
        setProductStatus(statusResponse.data);
      }
    };

    fetchProducts();
    fetchInquiries();
    fetchProductStatus();
  }, []);

  return (
    <div className="w-full h-full flex">
      <div className="w-[65%] h-full mx-1 p-2">
        <div className="h-[40%]">
          <h5>Dashboard</h5>
          <h3 className="text-xl">Welcome, User!</h3>
          <div className="h-[40%] p-1 flex justify-around">
            <div className="h-full w-[48%] bg-white p-1 rounded-md shadow-md">
              Total Received Inquiries
              <br />
              <span className="text-2xl pl-2">{inquiries.length}</span>
            </div>
            <div className="h-full w-[48%] bg-white p-1 rounded-md shadow-md">
              Active Inquiries
              <br />
              <span className="text-2xl pl-2">
                {
                  inquiries?.filter((inquiry) => inquiry.status === "Active")
                    .length
                }
              </span>
            </div>
          </div>
          <div className="h-[40%] p-1 flex justify-around">
            <div className="h-full w-[48%] bg-white p-1 rounded-md shadow-md">
              Completed Inquiries
              <br />
              <span className="text-2xl pl-2">
                {
                  inquiries?.filter((inquiry) => inquiry.status === "Completed")
                    .length
                }
              </span>
            </div>
            <div className="h-full w-[48%] p-1"></div>
          </div>
        </div>
        <div className="h-[60%] bg-white flex justify-center items-center p-2 shadow-md">
          <AnalyticsBarGraph inquiries={inquiries} />
        </div>
      </div>
      <div className="w-[35%] h-full mx-1 overflow-y-auto">
        <ProductStatusChart productStatus={productStatus} />
        <div className="h-1/2 text-center flex flex-col justify-between p-2">
          <div className="flex justify-between p-2">
            <h5>My Products</h5>
            <button onClick={navigateToAllProducts}>View All</button>
          </div>
          <div className="overflow-y-auto h-full bg-white p-2 rounded-md shadow-md">
            {loading ? (
              <p>Loading...</p>
            ) : products.length > 0 ? (
              products.slice(0, 5).map((product, index) => (
                <div
                  key={index}
                  onClick={navigateToAllProducts}
                  className="flex justify-between p-2 cursor-pointer hover:bg-gray-200 rounded"
                >
                  <span className="text-sm">{product.productName}</span>
                  <span className="text-sm">${product.productPrice}</span>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
          <button
            onClick={navigateToAddNewProduct}
            className="text-xl text-white px-4 py-1 mt-4 bg-blue-900 rounded-md"
          >
            Add New Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
