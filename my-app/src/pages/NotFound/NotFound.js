import React from "react";
import {isMobile} from "react-device-detect";

class NotFound extends React.Component{
    UNSAFE_componentWillMount() {
        if (isMobile) {
            this.props.hideProfile();
        }
    }
    render() {
        return( <h3>Not found</h3> );
    }
}

export default NotFound
