import React from 'react';
import MatchupTable from './components/MatchupTable.js';
import './css/App.css';

export default class ChampApp extends React.Component {
    render() {
        return (
            <div>
                <div className="matchup-table">
                    <MatchupTable/>
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