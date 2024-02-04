import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "shop/",
                    element: <ShopPage />,
                }
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;