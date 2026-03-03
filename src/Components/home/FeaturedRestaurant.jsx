import React from "react";
import { Link } from "react-router-dom";

const FeaturedRestaurant = () => {
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
      name: "Chicken Biryani",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      price: "$8.99",
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
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 tracking-tight">
          Popular Dishes
        </h2>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-2xl overflow-hidden border border-gray-100
                shadow-md transition-all duration-500
                md:hover:shadow-2xl md:hover:-translate-y-2
                active:scale-95
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="
                    h-52 w-full object-cover
                    transition-transform duration-500
                    md:group-hover:scale-110
                  "
                />

                {/* Overlay (Desktop Only) */}
                <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="
                  text-lg font-semibold text-gray-800
                  transition-colors duration-300
                  md:group-hover:text-orange-600
                ">
                  {dish.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {dish.price}
                </p>

                <Link
                  to="/cart"
                  className="
                    mt-4 inline-block w-full text-center py-2.5 rounded-xl
                    bg-gradient-to-r from-orange-500 to-red-500
                    text-white text-sm font-medium tracking-wide
                    shadow-md
                    transition-all duration-300
                    md:hover:shadow-xl md:hover:scale-105
                    active:scale-105
                  "
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedRestaurant;