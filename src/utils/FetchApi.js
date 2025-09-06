import axios from "axios";

const ApiUrl =
  "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

const FetchApi = async () => {
  try {
    const response = await axios.get(ApiUrl);
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export default FetchApi;
