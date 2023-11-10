import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Chef = () => {
  const [recipes, setRecipes] = useState([]);
  const chefDetails = useLoaderData();
  const {
    id,
    chefName,
    chefPicture,
    yearOfExperience,
    numberOfRecipes,
    likes,
    shortBiography,
  } = chefDetails;

  useEffect(() => {
    fetch(`http://localhost:5000/recipe/${id}`)
      .then((res) => res.json())
      .then((res) => setRecipes(res));
  }, []);

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row rounded-none md:rounded-2xl">
        <figure>
          <img src={chefPicture} alt="Movie" />
        </figure>
        <div className="card-body gap-0">
          <h2 className="card-title text-pink-300 font-bold">{chefName}</h2>

          <div className="divide-y divide-gray-300">
            <p className="py-3">{shortBiography}</p>
            <p className="pt-3">Number of recipes: {numberOfRecipes} </p>
          </div>
          <p>Year of Experience: {yearOfExperience} years</p>
          <p>Likes: {likes}</p>
        </div>
      </div>
      {recipes.length}
    </>
  );
};

export default Chef;
