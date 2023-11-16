import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
export const router = createBrowserRouter([

    {
        element: <MainLayout />,
        children: [

            {
                path: '/home',
                element: <Home />
            },
        ]
    },
])