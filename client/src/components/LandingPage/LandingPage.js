import React from 'react';
import Table from './Table';
import Logo from '../../assets/logoblue.png'

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="text-center mb-5 mt-5">
                    <span className="display-4 h1" id="logo">
                        <img src={Logo} style={{ width: "350px" }} />
                    </span>
                </div>
                <div>
                    <Table />
                </div>
            </div>
        );
    }
}
