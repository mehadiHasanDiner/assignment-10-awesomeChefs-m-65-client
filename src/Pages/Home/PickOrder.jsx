import React from "react";
import { Link } from "react-router-dom";

const PickOrder = () => {
  return (
    <>
      <div className="mt-16 bg-base-100 font-serif">
        <div className="recipeCard-container">
          <div>
            <img
              src="https://i.ibb.co/n3FsNLX/ezgif-com-webp-to-jpg.jpg"
              alt=""
            />
          </div>
          <div className="text-center ">
            <h1 className="text-4xl mb-3">Pick Order</h1>
            <div className="divide-y ">
              <p className="mb-4">pick-up & delivery</p>
              <p></p>
            </div>
            <p className="mt-3">CONTACTLESS TAKE-OUT</p>
            <p className="my-2">To place an order for pickup,</p>
            <p>
              please order via <Link to="/">Awesome Chefs</Link>.
            </p>
            <button className="btn btn-neutral mt-3 mb-8">Order Pickup</button>
            <p className="">DELIVERY EXPANDED</p>
            <p>To place an order for delivery, please choose from</p>
            <p>
              one of our partners below: <Link to="/">Awesome Chefs</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickOrder;
