import Main from "../../Layout/Main/Main";
import AddService from "../../Pages/AllServices/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import UpdateReview from "../../Pages/Reviews/UpdateReview";
import Service from "../../Pages/Service/Serrvice";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/allServices')
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoutes><Reviews></Reviews></PrivateRoutes>
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/allServices')
            }
        ]
    }
])

export default router;