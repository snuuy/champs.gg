import React from 'react';
import MatchupHeader from './MatchupHeader.js';
import MatchupRow from './MatchupRow.js';
import '../css/Table.css';

export default class MatchupTable extends React.Component {
    render() {
        return (
            <div>
                <div className="matchup">
                    <MatchupHeader
                    search={this.props.search} ascending={this.props.ascending} 
                    active={this.props.active} handleTextChange={this.props.handleTextChange}
                    resetText={this.props.resetText} swapRating={this.props.swapRating}
                    text={this.props.text}/>
                </div>
                { this.props.championList.map(champion => <MatchupRow key={champion.id} name={champion.name} 
                icon={"https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/" + champion.id + ".png"}
                rating={champion.rating.toFixed(2)} page={this.props.page} comment="You one shot her on sight, she's very low life early so the invade is quite easy.
                You can R while she R you to get no dmg, you can R her out of her invisibility.... lots of outplays possible
                She's really useless once she gets behind, so if you manage to get few levels ahead early game is basically won"/>) } 
            </div>
        );
    }
}