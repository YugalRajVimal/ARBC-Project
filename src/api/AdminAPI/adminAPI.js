import axios from "axios";

//Update Logo / Name
const updateLogoAndName = async (formData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/admin/update-logo-name`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
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
};

// Function to add a new category
const addCategory = async (categoryData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/category/add-category`,
      categoryData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};

const updateCategory = async (editCategoryId, categoryData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/category/update-category/${editCategoryId}`,
      categoryData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/category/delete-category/${categoryId}`
    );
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};

// Function to add a new subcategory
const addSubCategory = async (subCategoryData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/category/add-sub-category`,
      subCategoryData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding subcategory:", error);
    throw error;
  }
};

// Function to update  subcategory
const updateSubCategory = async (subCategoryId, subCategoryData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/category/update-sub-category/${subCategoryId}`,
      subCategoryData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating subcategory:", error);
    throw error;
  }
};

// Delete Sub Category
const deleteSubCategory = async (subCategoryId) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/category/delete-sub-category/${subCategoryId}`
    );
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error("Error deleting subcategory:", error);
    throw error;
  }
};

const getAllSubCategories = async (categoryId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/category/get-all-sub-categories/${categoryId}`
    );
    console.log("--", response);
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

const getAllBuyers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/get-all-buyers`
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

const getAllSellers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/get-all-sellers`
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

const addAsideListItem = async (data) => {
  if (data.id === null) {
    return {
      status: 400,
      data: "Category ID/ProductId is required",
    };
  }

  if (data.id == 0) {
    data.productId = null;
  }
  if (data.id > 0 || data.id < 0) {
    data.categoryId = null;
  }

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/category/add-aside-list-items/${data.id}`,
      data,
      {
        headers: { "Content-Type": "application/json" },
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
    return null;
  }
};

const deleteAsideListItems = async (data) => {
  if (data.id == 0) {
    data.productId = null;
  }
  if (data.id > 0 || data.id < 0) {
    data.categoryId = null;
  }

  console.log("----", data);

  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/category/delete-aside-list-item/${data.id}`,
      { data }
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

const getSubCategories = async (categoryId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/category/get-all-sub-categories/${categoryId}`
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

// featuredCategory={
//   "subCategory1": {
//       "subCategoryId": "6734a95b5a2fe6dba1d5ec52",
//       "text": "Gadgets",
//       "image": "uploads/1731790868937-IMG_20240828_103636.jpg"
//   },
//   "subCategory2": {
//       "subCategoryId": "6734a95b5a2fe6dba1d5ec52",
//       "text": "2nd Cat",
//       "image": "uploads/1731790868940-WhatsApp Image 2024-11-15 at 18.56.08 (1).jpeg"
//   },
//   "_id": "67387a7b16ec16b1636f70f4",
//   "id": 0,
//   "categoryId": "6734a8c05a2fe6dba1d5ebcb",
//   "text": "Electronics"
// }

const addFeaturedCategoryDetails = async (formData) => {
  try {
    console.log(formData);
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/category/update-featured-category`,
      formData,
      {
        // multipart formdata
        headers: { "Content-Type": "multipart/form-data" },
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

const getBuyRequirements = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/get-buy-requirements`
    );
    const data = await response.data;
    if (response.status === 200) {
      console.log(response.data);
      return await data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllInquiries = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/get-all-inquiries`
    );
    const data = await response.data;
    if (response.status === 200) {
      console.log(response.data);
      return await data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addBanner = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/admin/add-banner`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (response.status === 201) {
      return 201;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getBanners = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/get-banners`
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

const deleteBanner = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/admin/delete-banner/${id}`
    );
    if (response.status === 200) {
      return 200;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

//user/get-testimonials
const getTestimonials = async () => {
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

// Post Testimonials
// {
//   "name":"Yugal",
//   "designation":"Software Developer",
//   "rating":"4",
//   "review":"xsjcndijwncjewnd"
// }

const postTestimonials = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/post-testimonial`,
      data
    );

    if (response.status === 201) {
      return 201;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// /admin/delete-testimonial/:testimonialId
const deleteTestimonial = async (testimonialId) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/admin/delete-testimonial/${testimonialId}`
    );
    if (response.status === 200) {
      return 200;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  addCategory,
  addSubCategory,
  getAllSubCategories,
  getAllBuyers,
  getAllSellers,
  addAsideListItem,
  deleteAsideListItems,
  getAsideListItems,
  getAllCategories,
  getSubCategories,
  getAllPopulatedCategories,
  addFeaturedCategoryDetails,
  getBuyRequirements,
  getAllInquiries,
  addBanner,
  getBanners,
  deleteBanner,
  getTestimonials,
  postTestimonials,
  deleteTestimonial,
  updateCategory,
  updateSubCategory,
  deleteCategory,
  deleteSubCategory,
};
