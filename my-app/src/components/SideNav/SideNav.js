import React from "react";
import {NavLink} from "react-router-dom";
import './SideNav.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

class SideNav extends React.Component {
    render() {
        return (
            <ul className={this.props.isShowNav ? "SideNav expand" : "SideNav"}
                onMouseDown={this.props.handleMouseDown}>
                <button className="close-icon" onMouseDown={this.props.handleMouseDown}><FontAwesomeIcon icon={faTimes}/></button>
                <li><NavLink to="/" exact={true} activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/blog" exact={true} activeClassName="active">Blog</NavLink></li>
                <li><NavLink to="/just4fun" exact={true} activeClassName="active">Just4Fun</NavLink></li>
            </ul>
        )
    }
}

export default SideNav;
