/** @format */

import Navbar from "../component/Navbar";
import CardHome from "../component/CardHome";
// import Banner from "../component/Banner";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-custom pt-12 flex justify-center items-center ">
        <CardHome />
      </div>
      <div>{/* <Banner /> */}</div>
    </div>
  );
};

export default Homepage;
