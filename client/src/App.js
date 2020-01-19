import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import ChampionPage from './components/ChampionPage/ChampionPage';
import './css/App.css';

export default class App extends React.Component {
    render() {
        return (
            <>
                <div className="bg-dark py-2 px-4 w-100 text-white font-weight-bold top-bar">
                    <a href="/" style={{ color: "white" }}>
                        champs.gg
                    </a>
                    <div className="float-right text-white">
                        <span className="small">Version</span> 10.1
                    </div>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/:id" component={ChampionPage} />
                    </Switch>
                </BrowserRouter>
                <div className="pt-3 w-100 my-3 footer">
                    <div className="px-3 text-center mx-auto">
                        <p className="text-center mx-auto small text-muted m-0" style={{ maxWidth: "500px" }}>
                            champs.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games
                        or anyone officially involved in producing or managing League of Legends. League of Legends
                        and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends
                                                                                                                        © Riot Games, Inc.
                </p>
                        <p className="text-dark small text-center mt-3 mb-4">Contact: <b>champsdotgg@gmail.com</b></p>
                    </div>
                </div>
            </>
        );
    }
}