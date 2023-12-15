import React from "react";

const CardTemplate = ({dt}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dt.name}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
