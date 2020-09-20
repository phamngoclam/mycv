import React from "react";
import ProcessLine from "../ProcessLine/ProcessLine";
import './Skills.scss';

class Skills extends React.Component {
    render() {
        return (
            <div className="Skills">
                <h2 className="title">Skills</h2>
                <div className="skill-wrapper">
                    <div className="skill-item tech-skill">
                        <h3 className="secondary-title">Technical Skills</h3>
                        <ProcessLine title="HTML, CSS" value="90" />
                        <ProcessLine title="Javascript" value="95" />
                        <ProcessLine title="Reactjs" value="80" />
                        <ProcessLine title="Git" value="80" />
                    </div>
                    <div className="skill-item soft-skill">
                        <h3 className="secondary-title">Soft Skills</h3>
                        <p className="skill-title">Charitable activities</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
