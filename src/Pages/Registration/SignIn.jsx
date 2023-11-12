import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const SignIn = () => {
  const { signedInUser, createUserWithGoogle, createUserWithGithub } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill all the fields");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    signedInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setSuccess("You have successfully logged in");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
    setError("");
  };
  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  const handleGithubLogin = () => {
    createUserWithGithub()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

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
                onChange={() => setPassword(event.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <span className="text-warning text-center">{error}</span>
            <div className="form-control">
              <button className="btn btn-active capitalize text-lg">
                Sign in
              </button>
            </div>
            <span className="text-success text-center">{success}</span>

            <label className="label">
              <span>
                Don't have an account?
                <Link
                  to="/register"
                  className="text-center label-text-alt link link-hover hover:font-bold text-lg text-pink-600"
                >
                  {" "}
                  Sign Up!
                </Link>
              </span>
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
