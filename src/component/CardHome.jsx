/** @format */

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import axios from "axios";
import { setUser, setLoading, setError } from "../redux/reducers/userReduce";

const CardHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  function formatRupiah(number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
    return formatter.format(number);
  }

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch(setLoading(true));
      try {
        const tokenType = localStorage.getItem("token_type");
        const accessToken = localStorage.getItem("access_token");

        if (!tokenType || !accessToken) {
          throw new Error("Token type or access token is missing");
        }

        const authHeader = `${tokenType} ${accessToken}`;

        const response = await axios.get("https://soal.staging.id/api/home", {
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
        });

        dispatch(setUser(response.data));
      } catch (error) {
        dispatch(setError(error.message || "Failed to fetch data"));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUserData();
  }, [dispatch]);

  return (
    <div className="w-full">
      <div className="bg-custom pt-20 flex flex-col justify-center items-center">
        <div className="bg-white shadow-xl mb-20 rounded-xl mt-8  p-6 w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 xl:w-2/5">
          <h1 className="text-sm lg:text-base mb-2">
            {user?.result?.greeting},
          </h1>
          <p className="text-sm font-semibold lg:text-lg mb-6">
            {user?.result?.name}
          </p>
          <div className="flex items-center gap-4 md:gap-8">
            <div
              className="bg-white p-2 md:p-3 shadow-md rounded-full cursor-pointer"
              onClick={toggleModal}
            >
              <img
                src={user?.result?.qrcode}
                alt="QR Code"
                className="w-8 lg:w-12 h-8 lg:h-12"
              />
            </div>
            <div className="border-r-2 border-dotted h-10 md:h-12 border-gray-400"></div>
            <div className="flex-1">
              <div className="flex justify-between items-center gap-5 md:gap-8">
                <p className="text-sm lg:text-base">Saldo</p>
                <span className="font-semibold text-sm lg:text-base">
                  {formatRupiah(user?.result?.saldo)}
                </span>
              </div>
              <div className="flex justify-between items-center gap-5 md:gap-8">
                <p className="text-sm lg:text-base">Points</p>
                <span className="text-green-500 text-sm lg:text-base font-semibold">
                  {user?.result?.point}
                </span>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg relative w-10/12 md:w-2/3 lg:w-1/3">
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
                <p className="mb-4 text-xs md:text-sm">
                  Show the QR Code below to the cashier.
                </p>
                <img
                  src={user?.result?.qrcode}
                  alt="QR Code"
                  className="w-full h-auto max-w-xs mx-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {user?.result?.banner && user.result.banner.length > 0 && (
        <div className="w-full h-40  md:h-64 lg:h-80 relative bg-white mb-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="w-full h-full"
          >
            {user.result.banner.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full flex items-center justify-center">
                  <img src={banner} alt="Banner" className="w-full h-auto" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         
          <div className="flex justify-between items-center mt-4 px-4">
            <div className="custom-pagination"></div>
            <button className="text-green-700 w-full text-end">View All</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardHome;
