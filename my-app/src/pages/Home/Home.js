import React from "react";
import Objective from "../../components/Objective/Objective";
import Information from "../../components/Information/Information";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import './Home.scss';
import {isMobile} from "react-device-detect";

class Home extends React.Component {
    UNSAFE_componentWillMount() {
        if (isMobile) {
            this.props.showProfile();
        }
    }
    
    render() {
        return(
        <div className="Home">
            <Objective/>
            <Information/>
            <Skills/>
            <Education/>
            <Experience/>
        </div>
        )
    }
}

export default Home;
