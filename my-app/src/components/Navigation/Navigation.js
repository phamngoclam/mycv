import React from "react";
import './Navigation.scss';

class Navigation extends React.Component {
    render() {
        return(
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
