
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"; 
/* import SignIn from "../pages/SignIn";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";  */
import Login from "../pages/Login"; 
import Register from "../pages/Register"
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
    children: [
       {
          path: '/',
          element: <Home/>,
        },
         {
          path: '/login',
          element: <Login />,
        }, 
        {
       path: '/register',
          element: <Register />
        },
   /*  {
          path: '/create',
          element: <Create />
    } */
      ],  
    },
  ]);
