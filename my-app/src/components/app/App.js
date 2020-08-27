import React from 'react';
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import NavControl from "../NavControl/NavControl";
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from "../../routes";

const cvData = {
    information: {
        name: 'Pham Ngoc Lam',
        DOB: '16/10/1995',
        sex: 'Male',
        address: 'No 42, 18 Street, Linh Trung Ward, Thu Duc District'
    },
    objective: {
        intro: 'Hello, I\'m Pham Ngoc Lam',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    education: {},
    skills: {},
    experience: {},
    knowledge: {},
    just4fun: {}
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShowNav: false};
    }
    
    toggleSideNav = () => {
        this.setState({isShowNav: !this.state.isShowNav})
    }
    handleMouseDown = (e) => {
        this.toggleSideNav();
        e.stopPropagation();
    }
    
    render() {
        return (
            <div className="container-app">
                <svg id="left-polygon" height="519" width="758">
                    <polygon className="pol" points="0,455,693,352,173,0,92,0,0,71"></polygon>
                </svg>
                <svg id="right-polygon" height="536" width="633">
                    <polygon className="pol" points="0,0,633,0,633,536"></polygon>
                </svg>
                <Router>
                    <div className="App">
                        <div className="sidebar">
                            <Profile/>
                        </div>
                        <div className="container">
                            <Header isShowNav={this.state.isShowNav} handleShowNav={this.handleMouseDown}/>
                            <SideNav isShowNav={this.state.isShowNav} handleMouseDown={this.handleMouseDown}/>
                            
                            <div className="content-wrapper">
                                {routes.map(route => (<Route key={route.id} {...route}/>))}
                                <p className="copyright">LamPham Resume @ All Rights Reserved 2020</p>
                            </div>
                        </div>
                        <div className="nav-control">
                            <NavControl/>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
