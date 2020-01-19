import React from 'react';
import Table from './Table';
import Logo from '../../assets/logo.png'
import ReactGA from 'react-ga'
export default class LandingPage extends React.Component {

    componentDidMount() {
        ReactGA.pageview("/")
    }

    render() {
        return (
            <div className="container">
                <div className="text-center my-md-5 my-3 pt-2">
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
