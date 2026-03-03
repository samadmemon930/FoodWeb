import React from "react";
import { useCart } from "../../hooks/useCart";

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">
          {food.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {food.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-red-600 font-bold text-lg">
            ${food.price}
          </span>

          <button
            onClick={() => addToCart(food)}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;