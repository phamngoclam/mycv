import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Just4fun from "./components/Just4Fun/Just4fun";

const routes = [
    {
        id: 0,
        exact: true,
        path: "/",
        component: Home
    }, {
        id: 1,
        path: "/blog",
        component: Blog
    }, {
        id: 2,
        path: "/just4fun",
        component: Just4fun
    }
];

export default routes;
