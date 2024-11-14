import axios from "axios";

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

const getAllSubCategories = async (categoryId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/category/get-all-sub-categories/${categoryId}`
      );
      console.log("--",response);
      if (response.status === 200) {
        return {
            status: response.status,
            data: response.data
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
            data: response.data
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
                data: response.data
          };
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
        
    }
    };

  

export { addCategory, addSubCategory, getAllSubCategories, getAllBuyers, getAllSellers };
