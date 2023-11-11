import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
  const handleLogin = () => {};
  const handleGoogleLogin = () => {};
  const handleGithubLogin = () => {};

  return (
    <div className="-mt-8">
      <h1 className="text-5xl font-bold text-center">Please Sign In</h1>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left "></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <form onSubmit={handleLogin} className="card-body -mb-4">
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mb-4">
              <button className="btn btn-active capitalize text-lg">
                Sign in
              </button>
            </div>

            <label className="label">
              <Link
                to="/register"
                className="text-center label-text-alt link link-hover hover:font-bold"
              >
                New to Auth-Master? Please Register!
              </Link>
            </label>
          </form>
          <div className="text-center mb-2 form-control px-8">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-neutral capitalize text-md"
            >
              <FcGoogle className="text-2xl" /> Sign In with Google
            </button>
          </div>
          <div className="text-center mb-8 form-control px-8">
            <button
              onClick={handleGithubLogin}
              className="btn btn-neutral capitalize text-md"
            >
              <FaGithub className="text-2xl" /> Sign In with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
