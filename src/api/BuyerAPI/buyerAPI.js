import axios from "axios";

const getAsideListItems = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/category/get-aside-list-items/${id}`
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllCategories = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/category/get-all-categories`
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllSubCategories = async (categoryId) => {
  console.log(categoryId);
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/category/get-all-sub-categories/${categoryId}`
    );
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllPopulatedCategories = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/category/get-all-populated-categories`
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getSubCategoryProducts = async (subCategoryId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-sub-category-products/${subCategoryId}`
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getNewArrivals = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-new-arrivals`
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getProductPageDetails = async (productId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-product-page-details/${productId}`
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const postBuyRequirement = async (requirementData) => {
  try {
    //user/post-buy-requirements
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/post-buy-requirements`,
      requirementData
    );
    if (response.status === 201) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllTestimonials = async () => {
  console.log("Getting testimonials");
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/get-testimonials`
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const postInquiry = async (productId) => {
  ///post-inquiry/:productId with token
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/post-inquiry/${productId}`,
      {},
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 201) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// /category/get-recently-added-categories
const getRecentlyAddedCategories = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/category/get-recently-added-subcategories`
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  getAsideListItems,
  getAllCategories,
  getAllPopulatedCategories,
  getNewArrivals,
  getAllSubCategories,
  getSubCategoryProducts,
  getProductPageDetails,
  postBuyRequirement,
  getAllTestimonials,
  postInquiry,
  getRecentlyAddedCategories,
};
