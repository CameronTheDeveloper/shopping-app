import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "homepage/",
                    element: <HomePage />,
                },
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