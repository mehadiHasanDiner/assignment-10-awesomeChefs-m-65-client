import React, { useEffect, useState } from "react";
import Chefs from "./Chefs";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((chefs) => setChefs(chefs));
  }, []);

  return (
    <>
      <div className="chefs-container">
        {chefs.map((chef) => (
          <Chefs key={chef.id} chef={chef}></Chefs>
        ))}
      </div>
    </>
  );
};

export default Home;
