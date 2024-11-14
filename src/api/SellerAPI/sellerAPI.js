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
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getProductsStatus };
