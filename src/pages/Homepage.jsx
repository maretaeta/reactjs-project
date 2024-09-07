/** @format */

import Navbar from "../component/Navbar";
import CardHome from "../component/CardHome";
import Footer from "../component/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <CardHome />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
