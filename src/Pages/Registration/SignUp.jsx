import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(name, photo, email, password);
  };

  return (
    <>
      <div className="-mt-8">
        <h1 className="text-5xl font-bold text-center">Please Sign Up</h1>
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left "></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  onChange={() => setName(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  name="url"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                  onChange={() => setPhoto(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={() => setEmail(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={() => setPassword(event.target.value)}
                />
                <label className="label">
                  <span>
                    Already have an account?
                    <Link
                      to="/signIn"
                      className="text-center label-text-alt link link-hover hover:font-bold text-lg text-pink-600"
                    >
                      {" "}
                      Sign In!
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-active capitalize text-lg">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
