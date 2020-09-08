import React from "react";
import './Profile.scss';
import Avatar from '../../assets/img/avatar.png'
import {faFacebookF, faLinkedinIn, faSkype} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AnimationMixin from "../../plugin/animation";

class Profile extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.scrollEvent, true)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollEvent)
    }
    scrollEvent() {
        const avatar = document.getElementById("avatar");
        AnimationMixin.fixTop(avatar);
    }
    
    render() {
        return(
            <div className="Profile-wrapper" id="avatar">
                <img className="avatar" src={Avatar} height="200" width="200" alt="avatar" />
                <div className="contact-info">
                    <h3>Lam Pham</h3>
                    <p>Software Developer</p>
                    <div className="list-contact">
                        <a href="https://facebook.com/lam1610" target="_blank"
                           rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="https://linkedin.com/in/lamphamngoc" target="_blank"
                           rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        <a href="mailto:phamngoclam1610@gmail.com?subject = Hello&body = Message" target="_blank"
                           rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
                        <a href="https://facebook.com/lam1610" target="_blank"
                           rel="noopener noreferrer"><FontAwesomeIcon icon={faSkype}/></a>
                        <a href="https://facebook.com/lam1610" target="_blank"
                           rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone}/></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;
