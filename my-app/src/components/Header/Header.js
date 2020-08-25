import React from "react";
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="header">
                <div className="float-left"></div>
                <div className="nav-wrapper">
                    <NavLink to="/" exact><h1>LAM PHAM</h1></NavLink>
                    <button className="menu-icon" onMouseDown={this.props.handleShowNav}><FontAwesomeIcon
                        icon={this.props.isShowNav ? faTimes : faBars}/></button>
                </div>
                <div className="float-right"></div>
            </nav>
        );
    }
}

export default Header;
