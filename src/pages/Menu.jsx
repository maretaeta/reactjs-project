/** @format */
import { useState } from "react";
import Footer from "../component/Footer";

const categories = [
  { id: "seasonal", name: "Seasonal Product" },
  { id: "bestseller", name: "Best Seller" },
  { id: "coffee", name: "Coffee" },
];

const menuItems = {
  seasonal: [
    {
      name: "Raisin Delight Frappe",
      price: "50.000",
      description: "A timeless classic...",
      image: "url_to_image",
    },
    {
      name: "Green Tea Latte",
      price: "47.000",
      description: "A perfect combination...",
      image: "url_to_image",
    },
    {
      name: "Malaka Brulee Latte",
      price: "40.000",
      description: "A caffe latte...",
      image: "url_to_image",
    },
  ],
  bestseller: [
    {
      name: "Latte Freddo",
      price: "39.000",
      description: "A rich Espresso...",
      image: "url_to_image",
    },
    {
      name: "Vanilla Latte",
      price: "45.000",
      description: "A rich Espresso...",
      image: "url_to_image",
    },
    {
      name: "Green Tea Latte",
      price: "47.000",
      description: "A perfect combination...",
      image: "url_to_image",
    },
  ],
  coffee: [
    {
      name: "Caramel Machiatto",
      price: "50.000",
      description: "A delightful...",
      image: "url_to_image",
    },
    {
      name: "Latte Freddo",
      price: "39.000",
      description: "A rich Espresso...",
      image: "url_to_image",
    },
    {
      name: "Vanilla Latte",
      price: "45.000",
      description: "A rich Espresso...",
      image: "url_to_image",
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("seasonal");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="p-6 md:p-10 flex-grow">
        <h1 className="text-base lg:text-lg font-bold mb-10 md:mb-20 text-center">
          Menu
        </h1>
        <div className="flex flex-wrap justify-between border-b mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-full md:w-auto flex-1 py-4 px-4 md:px-6 text-center text-sm font-semibold transition-colors duration-300 ${
                activeCategory === category.id
                  ? "border-b-4 border-black text-black text-sm"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 p-6">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="flex items-center mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg text-sm"
              />
              <div className="ml-6">
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-black mt-2 text-sm font-bold">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
