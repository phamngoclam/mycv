import React from 'react';
import Objective from "../Objective/Objective";
import Navigation from "../Navigation/Navigation";
import Information from "../Information/Information";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import './App.scss';

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
    render() {
        return (
            <div className="App">
                <div className="sidebar">
                    dvdvds
                </div>
                <div className="container">
                    <Navigation/>
                    <div className="content-wrapper">
                        <Objective objectiveData={cvData.objective}/>
                        <Information infoData={cvData.information}/>
                        <Skills/>
                        <Experience/>
                    </div>
                </div>
                <div className="nav-control">
                    dsfsd
                </div>
            </div>
        );
    }
}

export default App;
