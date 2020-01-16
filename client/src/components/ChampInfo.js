import React from 'react';
import RoleButton from './RoleButton.js';
import '../css/ChampInfo.css';

export default class ChampInfo extends React.Component {

    render() {
        return (
            <div className="champion-info">
                <h1 className="champ-name-1">{this.props.name}</h1>
                <div className="player-container">
                    <img className="player-portrait" src={this.props.playerPicture} alt=""/>
                    <div className="player-desc">
                        <h2 className="player-name">{this.props.playerName}</h2>
                        <h2 className="player-bio">{this.props.description}</h2>
                    </div>
                    <div className="socials-container">
                        {this.props.twitch ? <a href={this.props.twitch} target="_blank" rel="noopener noreferrer"><img className="social-icon" id="twitch" src="https://assets.help.twitch.tv/Glitch_Purple_RGB.png" alt="" /></a> : <div></div>}
                        {this.props.opgg ? <a href={this.props.opgg} target="_blank" rel="noopener noreferrer"><img className="social-icon" id="opgg" src="https://opgg-static.akamaized.net/images/logo/2015/reverse.rectangle.png" alt="" /></a> : <div></div>}
                        {this.props.twitter ? <a href={this.props.twitter} target="_blank" rel="noopener noreferrer"><img className="social-icon" id="twitter" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1920px-Twitter_bird_logo_2012.svg.png" alt="" /></a> : <div></div>}
                        {this.props.youtube ? <a href={this.props.youtube} target="_blank" rel="noopener noreferrer"><img className="social-icon" id="youtube" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1280px-YouTube_play_buttom_icon_%282013-2017%29.svg.png" alt="" /></a> : <div></div>}
                    </div>
                </div>
                <div className="plug-container">
                    <h2 className="plug">{this.props.plug}</h2>
                </div>
                <div className="role-button-container">
                    {this.props.roles.map(role => <RoleButton role={role} changeRole={this.props.changeRole}
                        activeRole={this.props.activeRole}/>)} 
                </div>
            </div>
        );
    }
}