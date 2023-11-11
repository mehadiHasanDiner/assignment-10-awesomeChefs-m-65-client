import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleRegister = () => {};

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
                />
                <label className="label">
                  <Link
                    to="/signIn"
                    className="text-center label-text-alt link link-hover hover:font-bold"
                  >
                    Already have an account? Please Login!
                  </Link>
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
