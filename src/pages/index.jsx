import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import { Home } from './Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
    {
        path: "/signup",
        element: <div>Cadastro</div>,
    }
]);

export const Router = () => {
    return <RouterProvider router={ router } />
}