import React from "react";
import {NavLink} from "react-router-dom";
import './SideNav.scss'

class SideNav extends React.Component {
    render() {
        return (
            <ul className={this.props.isShowNav ? "SideNav expand" : "SideNav"}
                onMouseDown={this.props.handleMouseDown}>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                <li><NavLink to="/just4fun" activeClassName="active">Just4fun</NavLink></li>
            </ul>
        )
    }
}

export default SideNav;
