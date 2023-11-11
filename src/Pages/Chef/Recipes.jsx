import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaRegStar, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Recipes = ({ recipe }) => {
  const [favorite, setFavorite] = useState(true);
  const { id, recipeName, recipeImage, rating, cookingMethod } = recipe;

  const handleFavorite = () => {
    setFavorite(false);
    toast("Good Job! Successfully added to favorite", {
      icon: "😍",
      style: {
        borderRadius: "10px",
        background: "rgb(157 29 0)",
        color: "#fff",
      },
    });
  };
  return (
    <>
      <div className="card card-side  bg-base-100 shadow-xl">
        <figure>
          <img src={recipeImage} alt="Shoes" />
        </figure>
        <div className="card-body gap-0">
          <h2 className="card-title">{recipeName}</h2>
          <p>{cookingMethod}</p>
          <div className="card-actions justify-between items-center">
            <div className="text-lg flex items-center ">
              <Rating style={{ maxWidth: 110 }} value={rating} readOnly />
              <span className="ml-2">{rating}</span>
            </div>
            <button
              onClick={handleFavorite}
              className="btn btn-circle text-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!favorite}
            >
              <FcLike />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
