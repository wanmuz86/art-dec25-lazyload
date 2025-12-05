import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";


const Home = React.lazy(()=> import('./pages/Home'));
const About = React.lazy(()=> import('./pages/About'));
const App = React.lazy(()=> import('./App'));

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/", element:<Home/>
            },
            {
                path:"/about", element:<About/>
            },
             {
                path:"/first", element:<App/>
            },

        ]
    }
])