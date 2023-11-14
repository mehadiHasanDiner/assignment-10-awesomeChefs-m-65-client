import React, { useEffect, useState } from "react";
import Chefs from "./Chefs";
import BestDishes from "./BestDishes";
import PickOrder from "./PickOrder";
import Banner from "./Banner";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-awesome-chefs-m-65-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((chefs) => setChefs(chefs));
  }, []);

  return (
    <>
      <Banner></Banner>
      <div className="myCard-container mt-20">
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
