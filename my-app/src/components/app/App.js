import React from 'react';
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
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
        console.log(this.state.isShowNav);
        e.stopPropagation();
    }
    
    render() {
        return (
            <Router>
                <div className="App">
                    <Header isShowNav={this.state.isShowNav} handleShowNav={this.handleMouseDown}/>
                    <SideNav isShowNav={this.state.isShowNav} handleMouseDown={this.handleMouseDown}/>
                    <div className="container">
                        <div className="sidebar">
                            dvdvds
                        </div>
                        <div className="content-wrapper">
                            {routes.map(route => (<Route key={route.id} {...route}/>))}
                        </div>
                        <div className="nav-control">
                            dsfsd
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
