import React from "react";
import './NavControl.scss';
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AnimationMixin from "../../plugin/animation";

class NavControl extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.scrollEvent, true)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollEvent)
    }
    
    scrollEvent() {
        const navControl = document.getElementById("nav-control");
        AnimationMixin.fixTop(navControl);
    }
    
    render() {
        return(
            <div className="NavControl" id="nav-control">
                <FontAwesomeIcon icon={faUserCircle} className="nav-icon"/>
                <FontAwesomeIcon icon={faUserCircle} className="nav-icon"/>
            </div>
        )
    }
}
export default NavControl;
