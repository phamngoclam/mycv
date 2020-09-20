import React from "react";
import {isMobile} from "react-device-detect";

class Just4fun extends React.Component {
    UNSAFE_componentWillMount() {
        if (isMobile) {
            this.props.hideProfile();
        }
    }
    render() {
        return(
            <h3>Just For Fun</h3>
        )
    }
}

export default Just4fun;
