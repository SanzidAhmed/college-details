import React, { useState } from "react";
import Card from "./Card";

const Section1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <div className="container mx-auto">
      <div className="flex items-center space-x-4 mt-10 justify-center">
        <input
          type="text"
          placeholder="Enter college name"
          value={searchTerm}
          onChange={handleInputChange}
          className="py-2 px-4 border w-1/2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Search
        </button>
      </div>
      <div className="mt-6">
        <Card></Card>
      </div>
    </div>
  );
};

export default Section1;
