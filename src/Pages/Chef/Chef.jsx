import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes";

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
      <h2 className="card-title text-pink-200 font-bold text-3xl mb-3">
        {chefName}
      </h2>
      <div className="card card-side bg-base-100 shadow-2xl flex-col md:flex-row rounded-none md:rounded-2xl">
        <figure>
          <img src={chefPicture} alt={chefName} />
        </figure>
        <div className="card-body gap-0">
          <div className="divide-y divide-gray-300">
            <p className="py-3">{shortBiography}</p>
            <p className="pt-3">Number of recipes: {numberOfRecipes} </p>
          </div>
          <p>Year of Experience: {yearOfExperience} years</p>
          <p>Likes: {likes}</p>
        </div>
      </div>
      <div className="mt-16 recipeCard-container">
        {recipes.map((recipe) => (
          <Recipes key={recipe.id} recipe={recipe}></Recipes>
        ))}
      </div>
    </>
  );
};

export default Chef;
