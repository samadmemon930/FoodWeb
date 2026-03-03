import React, { useState } from "react";
import RestaurantCard from "../Components/restaurant/RestaurantCard";
import SearchBar from "../Components/restaurant/SearchBar";
import FoodCard from "../Components/restaurant/FoodCard";

const Restaurant = () => {
  const [search, setSearch] = useState("");

  const restaurant = {
    name: "Italiano Delight",
    description: "Authentic Italian cuisine made with fresh ingredients.",
    rating: "4.8",
    deliveryTime: "30-40",
    image:
      "https://images.unsplash.com/photo-1555992336-03a23c3fcd2c?auto=format&fit=crop&w=1200&q=80",
  };

  const foods = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      description: "Cheesy pizza topped with premium pepperoni.",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1601924582975-7e1f66e9a9f2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh basil and mozzarella.",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Creamy Pasta",
      description: "White sauce pasta with herbs and parmesan.",
      price: 9,
      image:
        "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredFoods = foods.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <RestaurantCard restaurant={restaurant} />

        <SearchBar search={search} setSearch={setSearch} />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>

    </>
  );
};

export default Restaurant;