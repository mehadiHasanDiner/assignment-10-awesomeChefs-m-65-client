import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

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
            <AiFillLike className="text-lg text-accent" />
            <span>{likesBtn / 1000}k</span>
          </button>
          <span>
            <Link to={`/chef/${id}`}>
              <button className="btn btn-neutral capitalize rounded-3xl">
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
