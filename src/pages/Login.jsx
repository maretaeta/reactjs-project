/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action/authAction";
import loginImg from "../assets/logo.png";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    dispatch(login({ email, password }, navigate));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FB] px-4">
      <img
        src={loginImg}
        alt="Technopartner Logo"
        className="w-3/4 md:w-2/6 lg:w-3/12 mb-8"
      />
      <div className="w-full max-w-sm px-12 lg:px-6 py-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="block text-sm lg:text-base font-medium">
            E-mail
          </label>
          <input
            id="email"
            className="w-full p-1 md:p-2 rounded-lg bg-white shadow-sm"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="mt-4 lg:mt-6 block text-sm lg:text-base font-medium">
            Password
          </label>
          <input
            id="password"
            className="w-full p-1 md:p-2 rounded-lg bg-white shadow-sm"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full mt-8 lg:mt-12 bg-white rounded-lg p-2 text-sm lg:text-base font-bold border border-gray-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
