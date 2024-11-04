import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import { ContactPage } from "../pages/ContactPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import QuizTestPage from "../pages/QuizTestPage"




export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            },
            {
                path:"/about",
                element: <AboutPage/>
            },
            {
                path:"/contact",
                element: <ContactPage/>
            },
         
            {
                path:"/login",
                element: <LoginPage/>
            },
            {
                path:"/register",
                element: <RegisterPage/>
            },
            {
                path:"/quiztest",
                element: <QuizTestPage/>
            },

        ]
    }
])