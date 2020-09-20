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
import NotFound from "../NotFound/NotFound";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  isShowNav: false,
                        isHideProfile: true};
    };
    toggleSideNav = () => {
        this.setState({isShowNav: !this.state.isShowNav});
    };
    handleMouseDown = (e) => {
        this.toggleSideNav();
        e.stopPropagation();
    };
    hideProfile = () => {
        console.log('hideProfile');
        this.setState({isHideProfile: !this.state.isHideProfile});
    }
    
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
                            <Profile/>
                        </div>
                        <div className="container">
                            <Header isShowNav={this.state.isShowNav} handleShowNav={this.handleMouseDown}/>
                            <SideNav isShowNav={this.state.isShowNav} handleMouseDown={this.handleMouseDown}/>
                            
                            <div className="content-wrapper">
                                <Switch>
                                    <Route path="/" exact render =  {(match, props) => <Home {...props} match={match} hideProfile={this.hideProfile}/>}/>
                                    <Route path="/blog" exact render =  {(match, props) => <Blog {...props} match={match}/>}/>
                                    <Route path="/just4fun" exact render =  {(match, props) => <Just4fun {...props} match={match}/>}/>
                                    <Route render =  {() => <NotFound />}/>
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
