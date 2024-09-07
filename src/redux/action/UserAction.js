/** @format */

import axios from "axios";
import { setUser } from "../reducers/authReduce";
import { toast } from "react-toastify";

export const getUser = (access_token) => async (dispatch) => {
  try {
    // Set authorization header with Bearer token
    const authHeader = `Bearer ${access_token}`;

    // API request
    const response = await axios.get("https://soal.staging.id/api/home", {
      headers: {
        Authorization: authHeader,
      },
    });

    if (response.status === 200) {
      console.log("Response Data:", response.data);
      // Dispatch the result from the response to the Redux store
      dispatch(setUser(response.data.result));
    } else {
      console.error("Unexpected status code:", response.status);
    }
  } catch (error) {
    // Handle errors from axios
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response);
      toast.error(error?.response?.data?.message || "Failed to fetch data");
    } else {
      toast.error(error.message);
    }
  }
};
