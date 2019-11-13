import React from 'react';
import ChampInfo from './components/ChampInfo.js';
import MatchupTable from './components/MatchupTable.js';
import './css/App.css';

export default class ChampApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: '',
        }
    }
    
    render() {
        return (
            <div>
                <div className="champ-info-container">
                    <ChampInfo name="CHAMPION NAME" rating="4.31"/>
                </div>
                <div className="matchup-table">
                    <MatchupTable roles={this.state.roles}/>
                </div>
                <p className="riot">
                    champs.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games
                    or anyone <br/> officially involved in producing or managing League of Legends. League of Legends
                    and Riot Games are <br/> trademarks or registered trademarks of Riot Games, Inc. League of Legends 
                    © Riot Games, Inc.
                </p>
            </div>
        );
    }
}