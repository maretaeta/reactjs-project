/** @format */

import axios from "axios";
import { setIsLoggedIn, setToken } from "../reducers/authReduce";
import { toast } from "react-toastify";

export const login = (data, navigate) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("client_secret", "0a40f69db4e5fd2f4ac65a090f31b823");
    formData.append("client_id", "e78869f77986684a");
    formData.append("username", data.email);
    formData.append("password", data.password);

    const response = await axios.post(
      "https://soal.staging.id/oauth/token",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { token_type, access_token } = response.data;

    localStorage.setItem("token_type", token_type);
    localStorage.setItem("access_token", access_token);

    dispatch(setToken(access_token));
    dispatch(setIsLoggedIn(true));

    navigate("/home");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response);
      toast.error(error?.response?.data?.message || "Login failed");
    } else {
      toast.error(error.message);
    }
  }
};
