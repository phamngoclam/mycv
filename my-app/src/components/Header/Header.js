import React from "react";
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render() {
        return (
            <nav className="header">
                <div className="float-left"></div>
                <div className="nav-wrapper">
                    <h2>LAM PHAM</h2>
                    <button className="menu-icon" onMouseDown={this.props.handleShowNav}><FontAwesomeIcon
                        icon={this.props.isShowNav ? faTimes : faBars}/></button>
                </div>
                <div className="float-right"></div>
            </nav>
        );
    }
}

export default Header;
