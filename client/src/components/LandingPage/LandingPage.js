import React from 'react';
import Table from './Table';
import Logo from '../../assets/logo.png'

export default class LandingPage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="text-center my-md-5 my-3 pt-2">
                    <span className="display-4 h1" id="logo">
                        <img src={Logo} style={{ width: "350px" }} />
                    </span>
                    <p className="instructions">Click on a champion to see their matchups. 
                        Vote on their general strength using oneof the 5 tier buttons.</p>
                </div>
                <div>
                    <Table />
                </div>
            </div>
        );
    }
}
