import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "projects",
        element: <Projects/>
    },
    {
        path: "resume",
        element: <Resume/>
    }
]);

