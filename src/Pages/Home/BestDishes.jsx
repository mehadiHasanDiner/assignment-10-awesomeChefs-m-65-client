import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestDishes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((chefs) => setRecipes(chefs));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-6">
      <Slider {...settings}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card w-full shadow-xl bg-neutral-900">
            <figure>
              <img src={recipe.recipeImage} alt="" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end"></div>
              <p className="text-lg italic text-center">{recipe.recipeName}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestDishes;
