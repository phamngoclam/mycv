import React from "react";
import './Information.scss';

class Information extends React.Component {
    render() {
        return (
            <div className="Information">
                <h2 className="title">Information</h2>
                <dl className="content">
                    <dt className="list-title">Full Name</dt>
                    <dd className="list-content">Pham Ngoc Lam</dd>
                    <dt className="list-title">D.O.B</dt>
                    <dd className="list-content">16 Oct 1995</dd>
                    <dt className="list-title">Gender</dt>
                    <dd className="list-content">Male</dd>
                    <dt className="list-title">Address</dt>
                    <dd className="list-content">No.70, Nguyen Huu Dat St, 15 Ward, Tan Phu District, HCMC</dd>
                    <dt className="list-title">Phone</dt>
                    <dd className="list-content">+84 35 816 4345</dd>
                    <dt className="list-title">E-mail</dt>
                    <dd className="list-content">phamngoclam1610@gmail.com</dd>
                    <dt className="list-title">Linkedin</dt>
                    <dd className="list-content"><a href="https://linkedin.com/in/lamphamngoc" target="_blank"
                                                    rel="noopener noreferrer">linkedin.com/in/lamphamngoc</a></dd>
                </dl>
            </div>
        );
    }
}

export default Information;
