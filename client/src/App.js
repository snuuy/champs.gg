import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import ChampApp from './components/ChampApp';
import './css/App.css';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/:id" component={ChampApp} />
                </Switch>
            </BrowserRouter>
        );
    }
}