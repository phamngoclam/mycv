import React from "react";
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="Header">
                <div className="nav-wrapper">
                    <NavLink to="/" exact><h1>LAM PHAM</h1></NavLink>
                    <button className="menu-icon" onMouseDown={this.props.handleShowNav}><FontAwesomeIcon
                        icon={faBars}/></button>
                </div>
            </nav>
        );
    }
}

export default Header;
