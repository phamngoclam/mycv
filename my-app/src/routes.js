import React from "react";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Just4fun from "./pages/Just4Fun/Just4fun";
import NotFound from "./components/NotFound/NotFound";

const routes = [
    {
        key: 0,
        exact: true,
        path: "/",
        render: ({match, props}) => <Home {...props} match={match} />
    }, {
        key: 1,
        path: "/blog",
        render: () => <Blog/>
    }, {
        key: 2,
        path: "/just4fun",
        render: () => <Just4fun/>
    }, {
        key: 3,
        render: () => <NotFound/>
    }
];

const nav = [
    {
        key: 0,
        name: "Home",
        path: "/",
        exact: true
    }, {
        key: 1,
        name: "Blog",
        path: "/blog",
        exact: false
    }, {
        key: 2,
        name: "Just4fun",
        path: "/just4fun",
        exact: false
    }
];

export {routes, nav};
