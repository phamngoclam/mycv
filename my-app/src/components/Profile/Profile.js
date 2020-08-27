import React from "react";
import './Profile.scss';
import Avatar from '../../assets/img/avatar.png'
import {faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Animation from "../../plugin/animation";

class Profile extends React.Component {
    componentDidMount() {
        const avatar = document.getElementById("avatar");
        window.onscroll = () => {
            Animation.fixTop(avatar);
        }
    }
    
    render() {
        return(
            <div className="Profile-wrapper" id="avatar">
                <img className="avatar" src={Avatar} height="200" width="200" alt="avatar" />
                <div className="contact-info">
                    <h3>Pham Ngoc Lam</h3>
                    <p>Software Developer</p>
                    <div className="list-contact">
                        <a href="https://facebook.com/lam1610" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="https://facebook.com/lam1610" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        <a href="https://facebook.com/lam1610" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;
