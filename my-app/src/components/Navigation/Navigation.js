import React from "react";
import './Navigation.scss';
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return(
                <nav className="navigation">
                    <h2>LAM PHAM</h2>
                    <ul>
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                        <li><NavLink to="/just4fun" activeClassName="active">Just4fun</NavLink></li>
                    </ul>
                </nav>
        );
    }
}

export default Navigation;
