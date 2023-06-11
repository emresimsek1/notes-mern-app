import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../components/Login/Login";
import Account from "../components/Account/Account";
import SignUp from "../components/SignUp/SignUp";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
        //    errorElement: <ErrorPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
        //    errorElement: <ErrorPage />,
      },
      {
        path: "home",
        element: <Home />,
        //    errorElement: <ErrorPage />,
      },
      {
        path: "account",
        element: <Account />,
        //    errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
