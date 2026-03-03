import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {restaurant.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {restaurant.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-500 font-semibold">
            ⭐ {restaurant.rating}
          </span>

          <span className="text-gray-600">
            {restaurant.deliveryTime} mins delivery
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;