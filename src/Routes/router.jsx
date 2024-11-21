import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import About from "../Components/LayoutComponents/About";
import StartLearning from "../Components/LayoutComponents/StartLearning";
import Tutorials from "../Components/LayoutComponents/Tutorials";
import Home from "../Components/LayoutComponents/Home";
import Lesson from "../Components/Pages/Lesson";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/startLearning',
            element: <StartLearning></StartLearning>,
            loader:()=> fetch('/lesson.json')
            
        },

        {
            path: '/tutorials',
            element: <Tutorials></Tutorials>
        },
        {
            path: '/auth/login',
            element: <Login></Login>
        },
        {
            path: '/auth/register',
            element: <Register></Register>
        },
        {
            path: '/lesson/:id',
            element: <Lesson></Lesson>,
            loader: async ({params})=>{
                const res = await fetch('/data.json')
                const data = await res.json()
                const lessonData = data.filter(d=> d.lesson_no ==params.id)
                return lessonData
            }
        }
      ]
    },
  ]);
  
export default router;