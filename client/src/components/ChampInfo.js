import React from 'react';
import RoleButton from './RoleButton.js';
import Button from './Button.js';
import colour from '../logic/colour.js';
import '../css/ChampInfo.css';

export default class ChampInfo extends React.Component {
    
    render() {
        return (
            <div className="champion-info">
                <h1 className="champ-name-1">{this.props.name}</h1>
                <div className="player-container">
                    <img className="player-portrait" src={this.props.playerPicture}/>
                    <div className="player-desc">
                        <h2 className="player-name">{this.props.playerName}</h2>
                        <h2 className="player-bio">{this.props.description}</h2>
                    </div>
                    <div className="socials-container">
                        <a href={"https://twitch.tv/" + this.props.twitch} target="_blank"><img className="social-icon" id="twitch" src="https://assets.help.twitch.tv/Glitch_Purple_RGB.png"/></a>
                        <a href={this.props.opgg} target="_blank"><img className="social-icon" id="opgg" src="https://opgg-static.akamaized.net/images/logo/2015/reverse.rectangle.png"/></a>
                        <a href={"https://twitter.com/" + this.props.twitter} target="_blank"><img className="social-icon" id="twitter" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1920px-Twitter_bird_logo_2012.svg.png"/></a>
                        <a href={this.props.youtube} target="_blank"><img className="social-icon" id="youtube" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1280px-YouTube_play_buttom_icon_%282013-2017%29.svg.png"/></a>
                    </div>
                </div>
                <div className="plug-container">
                    <h2 className="plug">{this.props.plug}</h2>
                </div>
                <div className="role-button-container">
                    {this.props.roles.map(role => <RoleButton role={role} changeRole={this.props.changeRole}
                    activeRole={this.props.activeRole}/>)}
                </div>
                <div className="information">
                    <h4>A higher number indicates a more difficult matchup. Opinions are provided by {this.props.playerName}.</h4>
                </div>
            </div>
        );
    }
}