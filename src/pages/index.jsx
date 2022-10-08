import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import { Home } from './Home'
import { Login } from './Login'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <div>Cadastro</div>,
    }
]);

export const Router = () => {
    return <RouterProvider router={ router } />
}