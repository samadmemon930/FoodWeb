import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Delicious Food Delivered
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Straight To Your Door
              </span>
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Order from your favorite restaurants and enjoy fresh meals anytime, anywhere.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/restaurant"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
              >
                Explore Menu
              </Link>

              <Link
                to="/orders"
                className="px-6 py-3 rounded-lg border border-orange-500 text-orange-600 font-medium transition-all duration-300 hover:bg-orange-100 hover:-translate-y-1 active:scale-95"
              >
                View Orders
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
              alt="Food"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover "
            />
          </div>
        </div>
      </section>

      {/* FEATURED RESTAURANTS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
            Featured Restaurants
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              {
                name: "Burger Palace",
                img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
                category: "Burgers • Fast Food"
              },
              {
                name: "Italiano Pizza",
                img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
                category: "Pizza • Pasta"
              },
              {
                name: "Spice Hub",
                img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
                category: "Desi • BBQ"
              }
            ].map((restaurant, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="h-48 w-full object-cover transition duration-500 cursor-pointer hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {restaurant.category}
                  </p>

                  <Link
                    to="/restaurant"
                    className="inline-block mt-4 text-orange-600 font-medium hover:underline"
                  >
                    View Menu →
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* POPULAR DISHES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
            Popular Dishes
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {[
              {
                name: "Cheese Burger",
                img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
                price: "$9.99"
              },
              {
                name: "Pepperoni Pizza",
                img: "https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                price: "$12.99"
              },
              {
                name: "Chicken Biryani",
                img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
                price: "$8.99"
              },
              {
                name: "BBQ Platter",
                img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
                price: "$14.99"
              }
            ].map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="h-48 w-full object-cover transition duration-500 hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-md font-semibold text-gray-800">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {dish.price}
                  </p>

                  <Link
                    to="/cart"
                    className="mt-3 block text-center w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-lg"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Order Your Favorite Meal?
          </h2>
          <p className="mt-3 text-white/90">
            Fast delivery, fresh food, and amazing taste.
          </p>

          <Link
  to="/restaurant"
  className="
    inline-block mt-6 px-6 py-3 rounded-lg bg-white text-orange-600 font-semibold shadow-md
    transform transition-all duration-300 ease-in-out
    
    hover:-translate-y-1 hover:shadow-xl
    active:-translate-y-1 active:shadow-xl
    focus:-translate-y-1 focus:shadow-xl
  "
>
  Order Now
</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;