import React from 'react';
import Table from './Table';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="text-center mb-5 mt-5">
                    <span className="display-4 h1" id="logo">
                        champs.gg
                    </span>
                </div>
                <div>
                    <Table />
                </div>
                <p className="riot text-center small">
                    champs.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games
                    or anyone <br /> officially involved in producing or managing League of Legends. League of Legends
                    and Riot Games are <br /> trademarks or registered trademarks of Riot Games, Inc. League of Legends
                    © Riot Games, Inc.
                </p>
            </div>
        );
    }
}
