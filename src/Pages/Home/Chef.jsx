import React from "react";
import { useLoaderData } from "react-router-dom";

const Chef = () => {
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
    </>
  );
};

export default Chef;

//  id,
//     chefName,
//     chefPicture,
//     yearOfExperience,
//     numberOfRecipes,
//     likes,
