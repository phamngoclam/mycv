import React from "react";
import {isMobile} from "react-device-detect";

class Blog extends React.Component {
    UNSAFE_componentWillMount() {
        if (isMobile) {
            this.props.hideProfile();
        }
    }
    render() {
        return(
            <h3>Blog</h3>
        )
    }
}

export default Blog;
