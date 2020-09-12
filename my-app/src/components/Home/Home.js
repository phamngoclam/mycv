import React from "react";
import Objective from "../Objective/Objective";
import Information from "../Information/Information";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Timer from "../Timer/Timer";
import './Home.scss'
class Home extends React.Component {
    render() {
        return(
        <div className="Homepage">
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
