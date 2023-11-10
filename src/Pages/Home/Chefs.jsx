import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chefs = ({ chef }) => {
  const {
    id,
    chefName,
    chefPicture,
    yearOfExperience,
    numberOfRecipes,
    likes,
  } = chef;

  const [likesBtn, setLikesBtn] = useState(likes);
  const handleLikeBtn = () => {
    setLikesBtn(likesBtn + 1);
  };

  return (
    <div className="card w-full glass">
      <figure>
        <img src={chefPicture} alt={chefName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-pink-300 font-bold">{chefName}</h2>
        <p>Year of Experience: {yearOfExperience} years</p>
        <p>Number of recipes: {numberOfRecipes} </p>
        <div className="card-actions justify-between items-center">
          <button onClick={() => handleLikeBtn()} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{likesBtn / 1000}k</span>
          </button>
          <span>
            <Link to={`/${id}`}>
              <button className="btn btn-primary capitalize rounded-3xl">
                View Recipes
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
