import React from "react";
import './Information.scss';

class Information extends React.Component {
    render() {
        return(
            <div className="information">
                {/*<h3>{this.props.infoData.name}</h3>*/}
                <div>{this.props.infoData.DOB}</div>
                <div>{this.props.infoData.sex}</div>
                <div>{this.props.infoData.address}</div>
            </div>
        );
    }
}

export default Information;
