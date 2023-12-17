import React from "react";
import { Link } from "react-router-dom";

const CardTemplate = ({ dt }) => {
  return (
    <div className=" rounded-3xl">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg mt-10">
        <img
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:rotate-0 group-hover:scale-90 bg-gradient-to-b from-transparent via-transparent to-black"
          src={dt.image}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
          <p className="text-white font-extrabold text-2xl mb-10">{dt.name}</p>
          <Link to={`/collegeDetails/${dt._id}`}>
            <button className="bg-orange-600 btn">Details</button>
          </Link>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
