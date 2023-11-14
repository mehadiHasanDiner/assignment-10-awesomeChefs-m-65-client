import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
// import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import SignIn from "../Pages/Registration/SignIn";
// import Chef from "../Pages/Chef/Chef";
import SignUp from "../Pages/Registration/SignUp";
import PrivateRoute from "./PrivateRoute";
import React, { Suspense } from "react";

const LazyHome = React.lazy(() => import("../Pages/Home/Home"));
const LazyChef = React.lazy(() => import("../Pages/Chef/Chef"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center">
                <span className="loading loading-bars loading-lg "></span>
              </div>
            }
          >
            <LazyHome></LazyHome>
          </Suspense>
        ),
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <Suspense
              fallback={
                <div className="flex justify-center">
                  <span className="loading loading-bars loading-lg "></span>
                </div>
              }
            >
              <LazyChef></LazyChef>
            </Suspense>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-awesome-chefs-m-65-server.vercel.app/chef/${params.id}`
          ),
      },
      { path: "blog", element: <Blog></Blog> },
      { path: "signIn", element: <SignIn></SignIn> },
      {
        path: "register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
