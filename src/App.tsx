import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Root from "./Pages/Root/Root";
import Individual from "./Pages/IndividualProduct/Individual";
import Buy from "./Pages/Buy/Buy";
import Cart from "./Pages/Cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/Products", element: <Products /> },
                { path: "/Individual/:num", element: <Individual /> },
                { path: "/Buy", element: <Buy /> },
                { path: "/Cart", element: <Cart /> },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
