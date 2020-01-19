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
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/:id" component={ChampionPage} />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}