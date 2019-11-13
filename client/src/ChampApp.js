import React from 'react';
import ChampInfo from './components/ChampInfo.js';
import MatchupTable from './components/MatchupTable.js';
import champData from './data/champData.js';
import './css/App.css';

let placeholderChampion = champData[87];
let placeholderRole = champData[87].roles[0];

export default class ChampApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            champion: placeholderChampion,
            role: placeholderRole,
            championList: champData.slice().filter(champ =>
                champ.roles.includes(placeholderRole) && champ.id !== placeholderChampion.id).
                sort((a, b) => b.rating - a.rating),
            search: 'Search by name...',
            ascending: false,
            active: '↓',
        }
        this.changeRole = this.changeRole.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.resetText = this.resetText.bind(this);
        this.swapRating = this.swapRating.bind(this);
        this.sortChampions = this.sortChampions.bind(this);
        }

    changeRole(role) {
        this.setState({
            role: role,
        }, () => {
            this.setState({
                championList: champData.slice().filter(champ =>
                    champ.roles.includes(this.state.role) && champ.id !== placeholderChampion.id).
                    sort((a, b) => b.rating - a.rating)
            });
        })
    }

    handleTextChange(value) {
        this.setState({
            search: value,
        }, () => {
            this.setState({
                championList: this.sortChampions(champData.slice().filter(champ =>
                champ.roles.includes(this.state.role) && champ.id !== placeholderChampion.id)),
            })
        });
    }

    resetText(){
        if (this.state.search === 'Search by name...') {
            this.setState({
                search: '',
            })
        }
        if (this.state.search === '') {
            this.setState({
                search: 'Search by name...',
            });
        }
    }

    swapRating() {
        this.setState({
            active: this.state.ascending ? '↓' : '↑',
            ascending: !this.state.ascending,
        }, () => {
            this.setState({
                championList: this.sortChampions(champData.slice().filter(champ =>
                    champ.roles.includes(this.state.role) && champ.id !== placeholderChampion.id)),
            });
        });
    }

    sortChampions(champions) {
        if (this.state.search !== '' && this.state.search !== 'Search by name...') {
            champions = champions.filter(champ => champ.name.toUpperCase().includes(this.state.search.toUpperCase()));
        }
        if (this.state.ascending) {
            champions.sort((a, b) => a.rating - b.rating);
        } else {
            champions.sort((a, b) => b.rating - a.rating);
        }
        return champions;
    }
    
    render() {
        return (
            <div>
                <div className="champ-info-container">
                    <ChampInfo name={this.state.champion.name} rating={this.state.champion.rating.toFixed(2)} 
                    id={this.state.champion.id} roles={this.state.champion.roles} changeRole={this.changeRole}/>
                </div>
                <div className="matchup-table">
                    <MatchupTable championList={this.state.championList} search={this.state.search} 
                    ascending={this.state.ascending} active={this.state.active} 
                    handleTextChange={this.handleTextChange} resetText={this.resetText} 
                    swapRating={this.swapRating}/>
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