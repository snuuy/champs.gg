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
                    text={this.props.text} resetTextOffFocus={this.props.resetTextOffFocus}/>
                </div>
                { this.props.championList.map(champion => <MatchupRow key={champion.champion.shortname} 
                name={champion.champion.name} 
                icon={"https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/" + champion.champion.shortname + ".png"}
                rating={champion.difficulty} page={this.props.page} comment={champion.comments}/>) } 
            </div>
        );
    }
}
/*
            { this.props.championList.map(champion => <MatchupRow key={"champion.id"} name={"champion.name"} 
                icon={"https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/" + champion.id + ".png"}
                rating={champion.difficulty} page={this.props.page} comment={champion.comments}/>) } 
*/