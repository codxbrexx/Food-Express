import React, { useContext, useState, useEffect } from "react";
import Nav from "../components/Nav";
import Categories from "./category";
import Card from "../components/Card";
import { food_items, testimonials_data } from "../food"; // Import testimonials_data
import { dataContext } from "../context/Usercontext";
import { ImCross } from "react-icons/im";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; // Import HeroSection
import EmptyState from "../components/EmptyState"; // Import EmptyState
import TestimonialCard from "../components/TestimonialCard"; // Import TestimonialCard
import { motion } from "framer-motion"; // Import motion for animations

function Home() {
  const { cate, setCate, input, showCard, setShowCard } = useContext(dataContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default"); // 'default', 'price_asc', 'price_desc', 'rating_desc'

  // Function to filter and sort items
  const filterAndSort = (category, currentSortOrder = sortOrder) => {
    setSelectedCategory(category);
    let filteredList = [];

    if (category === "All") {
      filteredList = food_items;
    } else {
      const catKey = category.toLowerCase().replace("-", "_");
      filteredList = food_items.filter(
        (item) => item.food_category.toLowerCase() === catKey
      );
    }

    // Apply sorting
    let sortedList = [...filteredList]; // Create a shallow copy to avoid direct state mutation
    if (currentSortOrder === "price_asc") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (currentSortOrder === "price_desc") {
      sortedList.sort((a, b) => b.price - a.price);
    } else if (currentSortOrder === "rating_desc") {
      sortedList.sort((a, b) => b.rating - a.rating);
    }
    setCate(sortedList);
  };

  // Update filter when input changes
  useEffect(() => {
    if (input) {
      const filteredItems = food_items.filter(item =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setCate(filteredItems);
    } else {
      filterAndSort(selectedCategory); // Reset to category filtering if input is empty
    }
  }, [input, selectedCategory]); // Re-filter when input or selectedCategory changes

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce((acc, item) => acc + item.price * item.qnty, 0);
  let tax = parseFloat((subtotal * 0.05).toFixed(2)); // Calculate 5% tax
  let shipping = 20.0;
  let total = parseFloat((subtotal + tax + shipping).toFixed(2));

  const totalUniqueItems = items.length;
  const totalQuantity = items.reduce((acc, item) => acc + item.qnty, 0);

  // Framer Motion variants for categories
  const categoryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="w-full min-h-screen  bg-gray-100">
      <Nav /> {/* Add this line at the top */}
      {!input && <HeroSection className="pb-12" />}

      {!input && ( // Only show categories if no search input 
        <div className="" >
           < >
          <h2 className="text-2xl font-bold text-gray-500 text-center pt-12 mb-4">Browse Categories</h2>
          <motion.div
            className="flex flex-wrap justify-center mt-12 items-center gap-6  px-4"
            variants={categoryContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {Categories.map((item) => (
              <motion.div
                key={item.id}
                className={`w-[140px] h-[150px]  flex flex-col bg-white text-[15px] text-gray-700 justify-center items-center gap-2 rounded-lg
                border-2 ${selectedCategory === item.name ? "border-blue-500 shadow-lg" : "border-transparent"}
                hover:border-blue-400 shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300 cursor-pointer`}
                onClick={() => filterAndSort(item.name)}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                variants={categoryItemVariants}
              >
                {item.icon}
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        </>

        </div>
       
      )}

      {/* Sorting Options */}
      <div className="flex justify-end items-center gap-4 px-6 md:px-8 mt-8">
        <label htmlFor="sort-by" className="text-gray-700 font-semibold">Sort By:</label>
        <select
          id="sort-by"
          className="p-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating_desc">Rating: High to Low</option>
        </select>
      </div>

      {/* Food Items Display */}
      <div id="food-items-section" className="flex flex-wrap justify-center items-center gap-6 mt-9 pb-12 px-4">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
              is_popular={item.is_popular}
              rating={item.rating}
            />
          ))
        ) : (
          <EmptyState
            message={input ? `No results for "${input}"` : "No items found in this category"}
            suggestion={input ? "Try a different search term or clear the search." : "Please select another category."}
          />
        )}
      </div>

      {/* Testimonials Section */}
      <div className="  dark:bg-[#2d3748] bg-gray-100  py-12 mt-12">
        <h2 className="text-3xl font-bold dark:text-gray-500 text-gray-800  mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {testimonials_data.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              rating={testimonial.rating}
              comment={testimonial.comment}
            />
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`w-[100%] md:w-[40vw] h-[100vh] overflow-y-scroll bg-white/95 fixed top-0 right-0 shadow-xl p-6 transition-all duration-500 rounded-l-2xl flex flex-col items-center z-30
        ${showCard ? "translate-x-0" : "translate-x-full"} `}
      >
        <header className="w-[100%] flex justify-between items-center mb-4">
          <span className="text-blue-400 text-xl font-semibold">Order items</span>
          <ImCross
            className={`text-blue-400 w-[30px] h-[30px] text-xl p-2 font-sans shadow-blue-200 shadow-sm rounded-2xl cursor-pointer hover:text-gray-700 hover:rotate-90 transform transition-transform duration-200`}
            onClick={() => setShowCard(false)}
          />
        </header>
        {items.length > 0 ? (
          <>
            <div className="w-full">
              {items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  id={item.id}
                  qnty={item.qnty}
                />
              ))}
            </div>
            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-6">
              <div className="w-full flex justify-between items-center">
                <span className="text-md text-gray-500 font-semibold">Unique Items</span>
                <span className="text-blue-400 font-semibold text-md">{totalUniqueItems}</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-md text-gray-500 font-semibold">Total Quantity</span>
                <span className="text-blue-400 font-semibold text-md">{totalQuantity}</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-md text-gray-500 font-semibold">Subtotal</span>
                <span className="text-blue-400 font-semibold text-md">Price {subtotal.toFixed(2)}/-</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-md text-gray-500 font-semibold">Shipping Fee</span>
                <span className="text-blue-400 font-semibold text-md">Price {shipping.toFixed(2)}/-</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-md text-gray-500 font-semibold">Taxes (5%)</span>
                <span className="text-blue-400 font-semibold text-md">Price {tax.toFixed(2)}/-</span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-6 mt-2">
              <span className="text-lg text-gray-600 font-semibold">Total</span>
              <span className="text-blue-500 font-bold text-lg">Price {total.toFixed(2)}/-</span>
            </div>
            <button className="w-[90%] h-[35px] bg-blue-400 hover:bg-blue-300 mb-3 text-gray-700 mt-4 rounded-lg font-bold transition-colors duration-200">
              Place Order
            </button>
          </>
        ) : (
          <div className="mt-20">
            <EmptyState message="Your cart is empty!" suggestion="Start adding some delicious food." />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
