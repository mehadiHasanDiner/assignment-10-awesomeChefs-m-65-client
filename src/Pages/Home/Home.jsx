import React, { useEffect, useState } from "react";
import Chefs from "./Chefs";
import BestDishes from "./BestDishes";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((chefs) => setChefs(chefs));
  }, []);

  return (
    <>
      <div className="myCard-container">
        {chefs.map((chef) => (
          <Chefs key={chef.id} chef={chef}></Chefs>
        ))}
      </div>
      <BestDishes></BestDishes>
    </>
  );
};

export default Home;
