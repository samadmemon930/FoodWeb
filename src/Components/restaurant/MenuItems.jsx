import React from "react";
import { useCart } from "../../hooks/useCart";

const MenuItems = ({ search = "" }) => {
  const { addToCart } = useCart();

  const dishes = [
    { id: 1, name: "Cheese Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80", price: 9.99 },
    { id: 2, name: "Pepperoni Pizza", image: "https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=1472&auto=format&fit=crop", price: 12.99 },
    { id: 3, name: "BBQ Platter", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80", price: 14.99 },
    { id: 4, name: "Zinger Burger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349", price: 10.99 },
    { id: 5, name: "Fajita Pizza", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65", price: 13.99 },
    { id: 6, name: "Pasta Alfredo", image: "https://images.unsplash.com/photo-1761168941826-7efda859bdae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 11.99 },
    { id: 7, name: "Grilled Sandwich", image: "https://plus.unsplash.com/premium_photo-1739906393226-9978e7943b00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 7.99 },
    { id: 8, name: "Chocolate Cake", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c", price: 6.99 },
    { id: 9, name: "Fried Rice", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 8.49 },
  ];

  const filteredItems = dishes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Our Menu
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    ${dish.price}
                  </p>

                  <button
                    onClick={() => addToCart(dish)}
                    className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg col-span-full text-gray-500">
              No Results Found
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default MenuItems;