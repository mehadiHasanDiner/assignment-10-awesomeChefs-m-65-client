import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="mt-16 bg-neutral-900 text-white px-16 pt-12 pb-2 divide-y-2 divide-red-900">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-6">
        <div>
          <h2 className="text-xl font-bold mb-8">Awesome Chefs</h2>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex mt-4">
            <img className="object-cover h-8 w-8 mr-2" src={facebook} alt="" />
            <img className="object-cover h-8 w-8 mr-2" src={twitter} alt="" />
            <img className="object-cover h-8 w-8" src={instagram} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Company</h2>
          <p className="mb-3">About Us</p>
          <p className="mb-3">Work</p>
          <p className="mb-3">Latest News</p>
          <p>Careers</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Product</h2>
          <p className="mb-3">Prototype</p>
          <p className="mb-3">Plan & Pricing</p>
          <p className="mb-3">Customers</p>
          <p>Integrations</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Support</h2>
          <p className="mb-3">Help Desk</p>
          <p className="mb-3">Become a Partner</p>
          <p className="mb-3">Customers</p>
          <p>Developers</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Contact</h2>
          <p className="mb-3">524 Broadway , NYC</p>
          <p className="mb-3">+1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <p>@2023 Awesome Chefs. All Rights Reserved</p>
        <p>
          Powered by: <strong>Awesome Chefs</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
