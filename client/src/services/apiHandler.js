import axios from "axios";

// We can create an instance of axios and set it with some base values like the URL to our API.

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

service.getPhoneData = async (id) => {
  try {
    const response = await service.get(`/phones/${id}`);
    return response;
  } catch (error) {
    errorHandler(error);
  }
};

service.getAllPhones = async () => {
  try {
    const phones = await service.get("/phones");
    return phones;
  } catch (error) {
    errorHandler(error);
  }
};

service.getPhoneData = async (id) => {
  try {
    const phone = await service.get(`/phones/${id}`);
    return phone;
  } catch (error) {
    errorHandler(error);
  }
};

//! Error handling to use in the catch
function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default service;
