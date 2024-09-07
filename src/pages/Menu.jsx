/** @format */

import  { useState } from "react";
import "./index.css"; // Ensure Tailwind is imported here

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Seasonal Product");

  const menuData = {
    "Seasonal Product": [
      {
        title: "Raisin Delight Frappe",
        description: "A creamy, sweet, and flavorful frappe...",
        price: "50.000",
      },
      {
        title: "Green Tea Latte",
        description: "Special green tea and fresh milk...",
        price: "47.000",
      },
      {
        title: "Malaka Brulee Latte",
        description: "A latte packed with an intense caramel flavor...",
        price: "40.000",
      },
    ],
    "Best Seller": [
      {
        title: "Latte Freddo",
        description: "Perfectly steamed milk topped with brown sugar...",
        price: "39.000",
      },
      {
        title: "Vanilla Latte",
        description: "A rich latte with perfectly steamed milk...",
        price: "45.000",
      },
      {
        title: "Green Tea Latte",
        description: "Special green tea and fresh milk...",
        price: "47.000",
      },
    ],
    Coffee: [
      {
        title: "Caramel Macchiato",
        description: "A delicious espresso drink...",
        price: "50.000",
      },
      {
        title: "Latte Freddo",
        description: "Perfectly steamed milk topped with brown sugar...",
        price: "39.000",
      },
      {
        title: "Vanilla Latte",
        description: "A rich latte with perfectly steamed milk...",
        price: "45.000",
      },
    ],
  };

  const CategoryTabs = ({ selectedCategory, setCategory }) => {
    const categories = ["Seasonal Product", "Best Seller", "Coffee"];
    return (
      <div className="flex justify-around border-b mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setCategory(category)}
            className={`px-4 py-2 font-semibold ${
              selectedCategory === category ? "border-b-2 border-black" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };

  const MenuItem = ({ item }) => {
    return (
      <div className="flex justify-between items-center border-b py-4">
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
        <div className="text-right">
          <span className="block font-bold">{item.price}</span>
        </div>
      </div>
    );
  };

  const MenuList = ({ menuItems }) => {
    return (
      <div className="mt-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">MENU</h1>
      <CategoryTabs
        selectedCategory={selectedCategory}
        setCategory={setSelectedCategory}
      />
      <MenuList menuItems={menuData[selectedCategory]} />
    </div>
  );
};

export default Menu;
