import React from 'react';
import Header from './Header.js';
import Row from './Row.js';
import '../css/Table.css';

export default class Table extends React.Component {
    render() {
        return (
            <div>
                <div className="main-rows">
                    <div className="row">
                        <Row
                        name="Ahri"
                        icon="https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/Ahri.png"
                        roles="Top, Mid"
                        rating="4.73"/>
                    </div>
                    <div className="row">
                        <Row
                        name="Lucian"
                        icon="https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/Lucian.png"
                        roles="Bot"
                        rating="3.98"/>
                    </div>
                    <div className="row">
                        <Row
                        name="Soraka"
                        icon="https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/Soraka.png"
                        roles="Support"
                        rating="2.58"/>
                    </div>
                    <div className="row">
                        <Row
                        name="Heimerdinger"
                        icon="https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/Heimerdinger.png"
                        roles="Top, Mid, Bot"
                        rating="1.30"/>
                    </div>
                </div>
            </div>
        );
    }
}