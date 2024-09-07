/** @format */

import { Link } from "react-router-dom";
import home from "../assets/home1.png";
import menu from "../assets/menu1.png";

const Footer = () => {
  return (
    <div className="w-full bg-white p-4 shadow-lg mt-10">
      <div className="container mx-auto flex justify-around items-center">
        <Link
          to="/home"
          className="flex flex-col items-center transition-transform hover:scale-105"
        >
          <img src={home} className="w-6 h-6" alt="Home" />
          <span className="text-sm mt-2">Home</span>
        </Link>

        <Link
          to="/menu"
          className="flex flex-col items-center transition-transform hover:scale-105"
        >
          <img src={menu} className="w-6 h-6" alt="Menu" />
          <span className="text-sm mt-2">Menu</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
