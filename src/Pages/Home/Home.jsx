import React, { useEffect, useState } from "react";
import Chefs from "./Chefs";
import BestDishes from "./BestDishes";
import PickOrder from "./PickOrder";

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
      <h1 className="text-3xl font-medium text-center mt-16 ">
        🥘 <span className="italic">Our Favorite Dishes</span> 🥘
      </h1>

      <BestDishes></BestDishes>
      <PickOrder></PickOrder>
    </>
  );
};

export default Home;
