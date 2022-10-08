import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World!</div>,
    }
]);

export const Router = () => {
    return <RouterProvider router={ router } />
}