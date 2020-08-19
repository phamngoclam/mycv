import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import App from "./components/app/App";
import Blog from "./components/Blog/Blog";

const routes = [
    {
        path: "/",
        component: App
    },
    {
        path: "/blog",
        component: Blog
    }
]
