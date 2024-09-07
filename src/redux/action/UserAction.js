/** @format */

import axios from "axios";
import { setUser } from "../reducers/userReduce";
import { toast } from "react-toastify";

export const getUser = () => async (dispatch) => {
  try {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      throw new Error("Access token is missing");
    }

    const response = await axios.get("https://soal.staging.id/api/home", {
      headers: {
        Authorization: access_token,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const { result } = response.data;

      if (result) {
        dispatch(setUser(result));
        console.log("Response Data:", result);
      } else {
        console.error("Data is null or undefined:", response.data);
        toast.error("Failed to fetch data: Data is null");
      }
    } else {
      console.error("Unexpected status code:", response.status);
      toast.error(
        `Failed to fetch data: Unexpected status code ${response.status}`
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response);
      toast.error(error.response?.data?.message || "Failed to fetch data");
    } else {
      console.error("Error:", error.message);
      toast.error(error.message || "An unknown error occurred");
    }
  }
};

export const getMenu = () => async () => {
  try {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      throw new Error("Access token is missing");
    }

    const response = await axios.get("https://soal.staging.id/api/menu", {
      headers: {
        Authorization: access_token,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const data = response.data;

      if (data) {
        console.log("Menu Data:", data);
      } else {
        console.error("Data is null or undefined:", data);
        toast.error("Failed to fetch data: Data is null");
      }
    } else {
      console.error("Unexpected status code:", response.status);
      toast.error(
        `Failed to fetch data: Unexpected status code ${response.status}`
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response);
      toast.error(error.response?.data?.message || "Failed to fetch data");
    } else {
      console.error("Error:", error.message);
      toast.error(error.message || "An unknown error occurred");
    }
  }
};
