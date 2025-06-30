import React, { useContext, useEffect, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { dataContext } from "../context/Usercontext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import ThemeToggle from "./ThemeToggle"; // Import ThemeToggle

const Nav = () => {
  let { input, setInput, cat, setCate, showCard, setShowCard } =
    useContext(dataContext);
  const { theme } = useContext(ThemeContext); // Use theme from context

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Search filter and suggestions
  useEffect(() => {
    if (input.length > 0) {
      const filteredItems = food_items.filter(
        (item) =>
          item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredItems.slice(0, 5)); // Limit suggestions to 5
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    // Also update the main category list for display
    const newList = food_items.filter(
      (item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input, setCate]);

  const handleSuggestionClick = (suggestionName) => {
    setInput(suggestionName);
    setShowSuggestions(false);
  };

  let items = useSelector((state) => state.cart);

  return (
<div className="w-full h-[100px] flex pt-2 px-6 md:px-8 justify-between items-center shadow-md bg-transparent backdrop-blur-md absolute top-0 left-0 z-30">
      <div className="flex items-center gap-2 mt-2">
  {/* Logo Box */}
  <div className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-md shadow-md">
    <MdFastfood className="w-[20px] h-[20px] text-blue-500" />
  </div>

  {/* Brand Name */}
  <span className="text-[14px] md:text-[22px] font-bold text-blue-500 drop-shadow-sm">
    Food Express
  </span>
</div>
      
      <div className="relative w-[40%] h-[40%] md:w-[30%] mt-3">
        <form
          className="w-full h-full bg-white flex justify-between hover:border-1 items-center gap-[20px] shadow-md rounded-md px-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <FaSearch className="w-[25px] h-[25px] ml-2 rounded-md shadow-2xl text-blue-500" />
          <input
            type="text"
            placeholder="Search items..."
className="w-full text-gray-800 outline-none text-[12px] md:text-[16px] p-2 rounded-md placeholder:text-[12px] md:placeholder:text-[16px]
             placeholder-gray-600 dark:placeholder-gray-400 "            
             onChange={(e) => setInput(e.target.value)}
            value={input}
            onFocus={() => input.length > 0 && setSuggestions(food_items.filter(item => item.food_name.toLowerCase().includes(input.toLowerCase())).slice(0, 5))}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Delay hiding to allow click
          />
        </form>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
            {suggestions.map((item) => (
              <div
                key={item.id}
                className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                onMouseDown={() => handleSuggestionClick(item.food_name)} // Use onMouseDown to prevent blur
              >
                {item.food_name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 mt-2">
        <ThemeToggle /> {/* Theme Toggle */}
        <div
          className="w-[40px] h-[40px] bg-white flex justify-center hover:border-1 items-center rounded-md shadow-md relative cursor-pointer"
          onClick={() => {
            setShowCard(true);
          }}
        >
          <span className="absolute rounded-full -top-1 -right-1 w-5 h-5 bg-red-500  text-white font-bold text-[10px] flex items-center justify-center">
            {items.length}
          </span>
          <FaShoppingBag className="w-[20px] h-[20px] text-blue-500" />
        </div>
        {/* Login and Signup Buttons */}
        <button className="hidden md:block bg-white text-blue-500 hover:border-1 hover:text-white px-4 py-2 rounded-md shadow-lg  cursor-pointer transition duration-200">
          Login
        </button>
        <button className="hidden md:block bg-white text-blue-500 hover:border-1 hover:text-white px-4 py-2 rounded-md shadow-lg  cursor-pointer transition duration-200">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Nav;
