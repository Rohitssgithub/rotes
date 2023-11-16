import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "./component/constant";
import PublicRoute from "./auth/PublicRoute";
import PrivateRoute from "./auth/PrivateRoute";
import HomeLayout from "./pages/MainLayout";
import "./App.css"

function App() {

  const roleWiseRouting = createBrowserRouter([
    ...Object.values(PATH.publicRoutes).map(route => ({
      path: route.path,
      element: <PublicRoute component={route.element} />
    })),
    {
      path: "/",
      element: <PrivateRoute component={HomeLayout} />,
      children: [
        ...Object.values(PATH.privateRoutes)
          .map(child => ({
            path: child.path,
            element: child.element
          })),
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" />
    },
  ])

  return (
    <div className="app">
      <RouterProvider router={roleWiseRouting} />
    </div>
  );
}

export default App;
