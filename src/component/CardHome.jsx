/** @format */

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import QR from "../assets/qr.jpg";
import { getUser } from "../redux/action/UserAction";

const CardHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useSelector((state) => state.user) || {};

  useEffect(() => {
    getUser();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl mt-14 mb-8 p-8 md:w-3/6 lg:w-1/2">
      <h1 className="text-sm lg:text-base mb-2">{user?.result?.greeting}</h1>
      <p className="text-sm font-semibold lg:text-lg mb-6">
        {user?.result?.name}
      </p>
      <div className="flex items-center gap-4 md:gap-10">
        <div
          className="bg-white p-2 md::p-3 shadow-md rounded-full"
          onClick={toggleModal}
        >
          <img src={QR} alt="QR Code" className="w-8 lg:w-12 h-8 lg:h-12" />
        </div>
        <div className="border-r-2 border-dotted h-12 border-gray-400"></div>
        <div className="flex-1">
          <div className="flex justify-between items-center gap-7">
            <p className="text-sm lg:text-base">Saldo</p>
            <span className="font-semibold text-sm lg:text-base">
              Rp 279.000
            </span>
          </div>
          <div className="flex justify-between items-center gap-7">
            <p className="text-sm lg:text-base">Points</p>
            <span className="text-green-500 text-sm lg:text-base font-semibold">
              2.500
            </span>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg shadow-lg relative w-80 md:w-96 lg:w-1/3">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center">
              <p className="mb-4 text-xs md:text-sm pt-8">Show the QR Code below to the cashier.</p>
              <img
                src={QR}
                alt="QR Code"
                className="w-full h-auto max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CardHome;
