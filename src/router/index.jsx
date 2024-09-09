
import { createBrowserRouter } from "react-router-dom";
/* import Layout from "../layout/Layout"; */
/* import Home from "../pages/Home";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail"; */
/* import Login from "../pages/Login"; */
import Register from "../pages/Register"

export const router = createBrowserRouter([
    {
      path: '/register',
      element: <Register/>,
    /*   children: [
       {
          path: '/',
          element: <Home />,
        },
        {
          path: '/register',
          element: <Register />,
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
        }, 
      ], */
    },
  ]);