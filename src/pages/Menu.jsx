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
    <div className="min-h-screen bg-white">
      <div className=" p-10 mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-20 text-center">Menu</h1>

        <div className="flex justify-between border-b mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-1 py-4 px-6 text-center text-lg font-semibold transition-colors duration-300 ${
                activeCategory === category.id
                  ? "border-b-4 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="p-6">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="flex items-center mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-6">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-black mt-2 text-lg font-bold">
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
