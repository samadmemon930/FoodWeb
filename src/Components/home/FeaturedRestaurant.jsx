import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedRestaurant = () => {
  return (
     <>
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
      </>

  )
}

export default FeaturedRestaurant