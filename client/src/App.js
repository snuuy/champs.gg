import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import ChampionPage from './components/ChampionPage/ChampionPage';
import './css/App.css';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/:id" component={ChampionPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}