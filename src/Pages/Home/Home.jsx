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
      <h1 className="text-3xl font-medium text-center mt-16">
        🥘 Our Best Dishes 🥘
      </h1>

      <BestDishes></BestDishes>
    </>
  );
};

export default Home;
