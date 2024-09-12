import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import SignIn from "../pages/SignIn";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";  */
import Login from "../pages/Login";
import Register from "../pages/Register"
import Layout from "../layout/Layout";
import LoginNew from "../pages/LoginNew.jsx";
import RegisterNew from "../pages/RegisterNew.jsx";
import AddFlatForm from "../pages/AddFlatForm.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
           
                element: <LoginNew/>,
            },
            {
                path: '/register',
     
                element: <RegisterNew/>
            },
            {
                path: '/flatcreate',
                element: <AddFlatForm />
            } 
        ],
    },
]);
