import React from "react";
import './ProcessLine.scss';

class ProcessLine extends React.Component {
    size = 'M 0,2 L ' + this.props.value + ',2';
    render() {
        return (
            <div className="ProcessLine">
                <p className="skill-title">{this.props.title}</p>
                <div className="process-bar">
                    <svg viewBox="0 0 100 5" preserveAspectRatio="none">
                        <path d="M 0,2 L 100,2" stroke="rgba(0,0,0,0.07)" strokeWidth="5"/>
                        <path d={this.size} stroke="#C0E3E7" strokeWidth="5"/>
                    </svg>
                    <p className="value">{this.props.value}%</p>
                </div>
            </div>
        )
    }
}

export default ProcessLine;
