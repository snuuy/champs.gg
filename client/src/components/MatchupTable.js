import React from 'react';
import MatchupHeader from './MatchupHeader.js';
import MatchupRow from './MatchupRow.js';
import champData from '../data/champData.js';
import '../css/Table.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'Search by name...',
            ascending: false,
            active: '↓',
            champions: champData.slice().sort((a, b) => b.rating - a.rating)
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.resetText = this.resetText.bind(this);
        this.swapRating = this.swapRating.bind(this);
    }

    handleTextChange(value) {
        this.setState({
            search: value,
        }, () => {
            this.setState({
                champions: this.sortChampions(champData.slice()),
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
                champions: this.sortChampions(champData.slice()),
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
                <div className="matchup">
                    <MatchupHeader
                    search={this.state.search} ascending={this.state.ascending} 
                    active={this.state.active} handleTextChange={this.handleTextChange}
                    resetText={this.resetText} swapRating={this.swapRating}/>
                </div>
                { this.state.champions.map(champion => <MatchupRow key={champion.id} name={champion.name} 
                icon={"https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/" + champion.id + ".png"}
                rating={champion.rating.toFixed(2)} />) }
            </div>
        );
    }
}