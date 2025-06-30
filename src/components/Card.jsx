import React from "react";
import { FaLeaf, FaHeart, FaRegHeart } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../Redux/cartSlice";
import { ToggleFavorite } from "../Redux/favoritesSlice";
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
import RatingStars from "./RatingStars"; // Import RatingStars

function Card({ name, image, id, price, type, is_popular, rating }) {
  let dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorited = favorites.some(item => item.id === id);

  const handleAddToCart = () => {
    dispatch(AddItem({ id: id, name: name, image: image, price: price, qnty: 1 }));
    toast.success(`${name} added to dish!`);
  };

  const handleToggleFavorite = () => {
    dispatch(ToggleFavorite({ id: id, name: name, image: image, price: price, type: type, is_popular: is_popular, rating: rating }));
    if (isFavorited) {
      toast.info(`${name} removed from favorites.`);
    } else {
      toast.success(`${name} added to favorites!`);
    }
  };

  return (
    <motion.div
      className="w-[220px] h-[310px] text-[15px] text-gray-700 justify-center mt-4 items-center p-3 rounded-lg flex-col bg-white gap-4
      hover:bg-blue-50 hover:text-gray-800 hover:border-blue-500 cursor-pointer
      hover:border-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-shadow duration-300 relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {is_popular && (
        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Popular
        </span>
      )}
      <button
        className="absolute top-2 right-2 z-10 p-1 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={handleToggleFavorite}
      >
        {isFavorited ? (
          <FaHeart className="text-red-500 text-lg" />
        ) : (
          <FaRegHeart className="text-gray-500 text-lg" />
        )}
      </button>

      <div className="w-[100%] h-[50%] rounded-lg overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="text-lg font-semibold mt-3">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-md font-bold text-blue-500 mt-2">
          price: {price}/-
        </div>
        <div className="flex justify-center items-center gap-2 text-blue-500 text-md">
          {type === "veg" ? <FaLeaf /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-1">
        <RatingStars rating={rating} />
        <span className="text-sm text-gray-600">({rating})</span>
      </div>
      <button
        className="w-full h-[35px] bg-blue-500 hover:bg-blue-300 text-gray-700 mt-4 rounded-lg font-bold transition-colors duration-200"
        onClick={handleAddToCart}
      >
        Add to dish
      </button>
    </motion.div>
  );
}

export default Card;
