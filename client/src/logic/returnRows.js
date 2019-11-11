import React from 'react';
import Row from '../components/Row.js';
import champions from '../data/champData.js';

function returnIcon(id) {
    return ("https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/" + id + ".png");
}

export default function returnRows() {
    let firstArr = [];
    for (let i = 0; i < champions.length; i++) {
        firstArr[i] = React.createElement(Row, {
        name: champions[i].name, 
        icon: returnIcon(champions[i].id),
        roles: champions[i].roles.join(', '),
        rating: ((Math.random() * 4) + 1).toFixed(2),
        });
    }
    return firstArr;
}

/*
<div>
    <div className="row">
        <Row
        name="Ahri"
        icon="https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/Ahri.png"
        roles="Mid"
        rating="4.73"/>
    </div>
    <div className="row">
        <Row
        name="Qiyana"
        icon="https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/Qiyana.png"
        roles="Top, Mid, Jungle"
        rating="4.03"/>
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
*/