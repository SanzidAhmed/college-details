import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/Signup/Signup";
import CollegeDetails from "../Pages/Home/Section1/CollegeDetails";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>,
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/collegeDetails/:id',
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params} ) => fetch(`http://localhost:4500/college/${params.id}`)
        }
      ]
    },
    
  ]);