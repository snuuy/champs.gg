import React from 'react';
import RoleButton from './RoleButton.js';
import '../css/ChampInfo.css';

export default class ChampInfo extends React.Component {
    render() {
        return (
            <div className="champion-info">
                <h1 className="champ-name-1">{this.props.name}</h1>
                <div className="role-button-container">
                    {this.props.roles.map(role => <RoleButton role={role} changeRole={this.props.changeRole}
                    activeRole={this.props.activeRole}/>)}
                </div>
                <div className="champion-container">
                    <img className="champ-portrait" 
                    src={"https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/" + this.props.id + ".png"} 
                    alt={this.props.name}/>
                    <h1 className="champion-rating-1">{this.props.rating} Rating</h1>
                </div>
            </div>
        );
    }
}