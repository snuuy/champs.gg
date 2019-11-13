import React from 'react';
import RoleButton from './RoleButton.js';
import Button from './Button.js';
import colour from '../logic/colour.js';
import '../css/ChampInfo.css';

export default class ChampInfo extends React.Component {
    styles = {
        backgroundColor: colour(this.props.rating),
    }
    
    render() {
        return (
            <div className="champion-info">
                <h1 className="champ-name-1">{this.props.name}</h1>
                <div className="role-button-container">
                    {this.props.roles.map(role => <RoleButton role={role} changeRole={this.props.changeRole}
                    activeRole={this.props.activeRole}/>)}
                </div>
                <div className="champion-container" style={this.styles}>
                    <img className="champ-portrait" 
                    src={"https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/" + this.props.id + ".png"} 
                    alt={this.props.name}/>
                    <div className="rating-area">
                        <h1 className="champion-rating-1">{this.props.rating}</h1>
                        <div className="button-container">
                                <Button value="S"/>
                                <Button value="A"/>
                                <Button value="B"/>
                                <Button value="C"/>
                                <Button value="D"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}