/** @format */
import { useState, useEffect } from "react";
import loginImg from "../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full left-0 top-0 px-5 md:px-10 p-2 drop-shadow-sm z-10 
      ${sticky ? "bg-white text-white h-20 items-center" : "bg-white "}`}
    >
      <div className="flex items-center justify-between z-10 gap-6 cursor-pointer h-14">
        <div className="flex">
          <img src={loginImg} alt="Technopartner Logo" className="w-36" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
