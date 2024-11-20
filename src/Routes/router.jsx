import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import About from "../Components/LayoutComponents/About";
import StartLearning from "../Components/LayoutComponents/StartLearning";
import Tutorials from "../Components/LayoutComponents/Tutorials";
import Home from "../Components/LayoutComponents/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path: '/about',
            element: <Home></Home>
        },
        {
            path: '/',
            element: <About></About>
        },
        {
            path: '/startLearning',
            element: <StartLearning></StartLearning>
        },
        {
            path: '/tutorials',
            element: <Tutorials></Tutorials>
        }
      ]
    },
  ]);
  
export default router;