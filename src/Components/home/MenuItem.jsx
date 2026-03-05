import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  // home / MenuItems 
  const dishes = [
    {
      name: "Cheese Burger",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      price: "$9.99",
    },
    {
      name: "Pepperoni Pizza",
      img: "https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=1472&auto=format&fit=crop",
      price: "$12.99",
    },
    {
      name: "BBQ Platter",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
      price: "$14.99",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Popular Dishes
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="menu-card group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                 className="menu-image h-52 w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {dish.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {dish.price}
                </p>

                <button
                    onClick={() => addToCart(dish)}
                    className="menu-btn mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium shadow-md"
                  >
                    Add to Cart
                  </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuItems;