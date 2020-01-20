import React from 'react';
import Table from './Table';
import Logo from '../../assets/logo.png'
import ReactGA from 'react-ga';
export default class LandingPage extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        ReactGA.pageview("/")
    }
    render() {
        return (
            <div className="container">
                <MetaTags>
                    <meta name="description" 
                        content="counters lane matchups tier list challenger league of legends lol 
                        guide season 10 best champions climbing"/>
                </MetaTags>
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
