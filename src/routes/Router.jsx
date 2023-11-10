import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import SignIn from "../Pages/Registration/SignIn";
import Chef from "../Pages/Home/Chef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: ":id",
        element: <Chef></Chef>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      { path: "blog", element: <Blog></Blog> },
      { path: "signIn", element: <SignIn></SignIn> },
    ],
  },
]);

export default router;
