import axios from "axios";

///get-products-status
// Response - {
//     "availableProducts": 1,
//     "comingSoonProducts": 0,
//     "outOfStockProducts": 1
// }
const getProductsStatus = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-products-status`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      return {
        status: response.status,
        data: response.data,
      };
    }
    return {
      status: response.status,
      data: {
        availableProducts: 0,
        comingSoonProducts: 0,
        outOfStockProducts: 0,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      data: {
        availableProducts: 0,
        comingSoonProducts: 0,
        outOfStockProducts: 0,
      },
    };
  }
};

const updateInquiryStatus = async (inquiryId, status) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/update-inquiry-status/${inquiryId}`,
      { status },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      return 200;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { getProductsStatus , updateInquiryStatus};
