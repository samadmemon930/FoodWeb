import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="my-8">
      <input
        type="text"
        placeholder="Search food items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;