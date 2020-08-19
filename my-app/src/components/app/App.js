import React from 'react';
import Navigation from "../Navigation/Navigation";
import Information from "../Information/Information";
import './App.scss';

const cvData = {
    information: {name: 'Pham Ngoc Lam', DOB: '16/10/1995', sex: 'Male', address: 'Number 42 18 Street, Linh Trung Ward, Thu Duc District'},
    objective: {},
    education: {},
    skills: {},
    experience: {},
    knowledge: {},
    just4fun: {}
}

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Information infoData={cvData.information} />
        </div>
    );
}

export default App;
