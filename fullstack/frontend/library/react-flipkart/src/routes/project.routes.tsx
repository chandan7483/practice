import { Outlet } from "react-router-dom";
import { Login } from "../pages/projects/login/Login.page";
import { Register } from "../pages/projects/register/Register.page";
import { Home } from "../pages/projects/homepage/home.page";


export const allProjectRoutes={
    path:'/project',
    element:<><Outlet/></>,
    children:[
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        },
        {
            path:'home',
            element:<Home/>
        }
    ]
}