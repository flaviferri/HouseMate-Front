
import { createBrowserRouter } from "react-router-dom";
/* import Layout from "../layout/Layout"; */
/* import Home from "../pages/Home";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail"; */
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>,
      children: [
    /*     {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/sign-in',
          element: <SignIn />,
        },
        {
          path: '/create',
          element: <Create />,
        },
        {
          path: '/edit/:name?',
          element: <Edit />,
        },
        {
          path: '/detail/:name?',
          element: <Detail />,
        }, */
      ],
    },
  ]);