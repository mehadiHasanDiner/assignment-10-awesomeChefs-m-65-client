import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import SignIn from "../Pages/Registration/SignIn";
import Chef from "../Pages/Chef/Chef";
import SignUp from "../Pages/Registration/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <Chef></Chef>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
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
