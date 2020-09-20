import React from 'react';
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import NavControl from "../NavControl/NavControl";
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";
import Just4fun from "../../pages/Just4Fun/Just4fun";
import NotFound from "../../pages/NotFound/NotFound";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  isShowNav: false,
                        isShowProfile: true};
    };
    toggleSideNav = () => {
        this.setState({isShowNav: !this.state.isShowNav});
    };
    handleMouseDown = (e) => {
        this.toggleSideNav();
        e.stopPropagation();
    };
    showProfile = () => {
        this.setState({isShowProfile: true});
    };
    hideProfile = () => {
        this.setState({isShowProfile: false});
    };
    
    render() {
        return(
            <div className="App">
                <svg id="left-polygon" height="519" width="758">
                    <polygon className="pol" points="0,455,693,352,173,0,92,0,0,71"></polygon>
                </svg>
                <svg id="right-polygon" height="536" width="633">
                    <polygon className="pol" points="0,0,633,0,633,536"></polygon>
                </svg>
                <Router>
                    <div className="container-app">
                        <div className="sidebar">
                            {this.state.isShowProfile && <Profile/>}
                        </div>
                        <div className="container">
                            <Header isShowNav={this.state.isShowNav} handleShowNav={this.handleMouseDown}/>
                            <SideNav isShowNav={this.state.isShowNav} handleMouseDown={this.handleMouseDown}/>
                            
                            <div className="content-wrapper" id="container-Id">
                                <Switch>
                                    <Route path="/" exact render =  {(match, props) => <Home {...props} match={match} showProfile={this.showProfile}/>}/>
                                    <Route path="/blog" exact render =  {(match, props) => <Blog {...props} match={match} hideProfile={this.hideProfile}/>}/>
                                    <Route path="/just4fun" exact render =  {(match, props) => <Just4fun {...props} match={match} hideProfile={this.hideProfile}/>}/>
                                    <Route render =  {() => <NotFound hideProfile={this.hideProfile}/>}/>
                                </Switch>
                                <p className="copyright">LamPham Resume, Created in 2020</p>
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
