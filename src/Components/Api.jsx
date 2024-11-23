import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/";

export const apiRequest = async (
  method,
  endpoint,
  data = null,
  headers = {}
) => {
  const url = `${API_BASE_URL}${endpoint}`; 
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data; 
  } catch (error) {
    console.error("API request failed:", error);
    throw error; 
  }
};
