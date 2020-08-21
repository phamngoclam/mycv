import React from "react";
import Objective from "../Objective/Objective";
import Information from "../Information/Information";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Timer from "../Timer/Timer";
class Home extends React.Component {
    render() {
        return(
        <div className="Homepage">
            <Timer/>
            <Objective/>
            <Information/>
            <Skills/>
            <Experience/>
        </div>
        )
    }
}

export default Home;
