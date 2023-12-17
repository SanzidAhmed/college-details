import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/colleges")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div >
      <div className="grid grid-cols-3 gap-6">
        {data.map((dt) => (
          <CardTemplate key={dt.id} dt={dt}>
            
          </CardTemplate>
        ))}
      </div>
    </div>
  );
};

export default Card;
