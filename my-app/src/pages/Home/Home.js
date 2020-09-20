import React from "react";
import {isMobile} from "react-device-detect";
import Objective from "../../components/Objective/Objective";
import Information from "../../components/Information/Information";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import './Home.scss'
class Home extends React.Component {
    componentWillMount() {
        this.props.hideProfile();
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
    componentDidMount() {
        console.log('profile');
    }
}

export default Home;
