import React from 'react';
import Table from './Table';
import Logo from '../../assets/logo.png'
import ReactGA from 'react-ga';
import MetaTags from 'react-meta-tags'
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
                    <title>champs.gg - Matchups, Counters, and Tier List for Season 10 - League of Legends</title>
                    <meta name="description" 
                        content="Season 10 League of Legends tier list, matchups and lane counters for season 10 League of Legends."/>
                    
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
