import React from 'react';
import RoleButton from './RoleButton.js';
import '../css/ChampInfo.css';

export default class ChampInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="champion-info">
                <h1 className="champ-name-1">{this.props.name}</h1>
                <div className="role-button-container">
                    <RoleButton role="Top"/>
                    <RoleButton role="Mid"/>
                </div>
                <div className="champion-container">
                    <img className="champ-portrait" 
                    src="https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/Kaisa.png" 
                    alt={this.props.name}/>
                    <h1 className="champion-rating-1">{this.props.rating} Rating</h1>
                </div>
            </div>
        );
    }
}