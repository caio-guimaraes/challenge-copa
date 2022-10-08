import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import { Home } from './Home'
import { Login } from './Login'
import { SignUp } from './SignUp'

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
        element: <SignUp />,
    }
]);

export const Router = () => {
    return <RouterProvider router={ router } />
}