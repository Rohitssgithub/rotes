import User from '../pages/User'
import Home from '../pages/Home';
import Login from './Login';
import About from '../pages/About'
export const PATH = {
    publicRoutes: {
        HOME: {
            path: '/login',
            element: Login
        },
    },
    privateRoutes: {
        HOME: {
            path: "/home",
            element: <Home />,
            pageName: "Home",
            sidebar: {
                show: true,
            }
        },
        USER: {
            path: "/user",
            element: <User />,
            pageName: "User",
            sidebar: {
                show: true,
            }
        },
        ABOUT: {
            path: "/about",
            element: <About />,
            pageName: "About",
            sidebar: {
                show: true,
            }
        },
    },

}



