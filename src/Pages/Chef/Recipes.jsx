import React from "react";
import Rating from "react-rating";
import { FcLike } from "react-icons/fc";

import { FaRegStar, FaStar } from "react-icons/fa";

const Recipes = ({ recipe }) => {
  const { id, recipeName, recipeImage, rating, cookingMethod } = recipe;
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
            <div className="text-lg">
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={
                  <FaStar className="text-yellow-400"></FaStar>
                }
                fullSymbol={
                  <FaStar className="text-yellow-300 hover:text-yellow-300"></FaStar>
                }
              />{" "}
              <span>{rating}</span>
            </div>
            <button
              className={`btn btn-circle text-xl disabled:opacity-50 disabled:cursor-not-allowed`}
              //   disabled
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
