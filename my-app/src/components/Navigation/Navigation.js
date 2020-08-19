import React from "react";
import './Navigation.scss';

class Navigation extends React.Component {
    render() {
        return(
                <nav className="navigation">
                    <h2>SOFTWARE DEVELOPER</h2>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/just4fun">Just4fun</a></li>
                    </ul>
                </nav>
        );
    }
}

export default Navigation;
