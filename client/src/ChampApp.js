import React from 'react';
import ChampInfo from './components/ChampInfo.js';
import MatchupTable from './components/MatchupTable.js';
import champData from './data/champData.js';
import './css/App.css';

let placeholderChampion = champData[88];
let initialRole = placeholderChampion.roles[0];
var response;

export default class ChampApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            champion: placeholderChampion,
            role: placeholderChampion.roles[0],
            championList: champData.slice().filter(champ =>
                champ.roles.includes(initialRole) && champ.id !== placeholderChampion.id)
                .sort((a, b) => b.rating - a.rating),
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

    componentDidMount(){
        var request = new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/api/champion/aatrox");
        request.send();
        request.onreadystatechange = event => {
            if (event.target.readyState === 4 && event.target.status === 200 && event.target.responseText) {
                response = JSON.parse(event.target.responseText);
                this.setState({
                    name: response.contributors[0].name,
                    portrait: response.contributors[0].portrait,
                    twitter: response.contributors[0].twitter,
                    twitch: response.contributors[0].twitch,
                    youtube: response.contributors[0].youtube,
                    biography: response.contributors[0].bio,
                    plug: response.contributors[0].message,
                })
            }
        }
    }
    
    changeRole(role) {
        this.setState({
            role: role,
        }, () => {
            this.setState({
                championList: champData.slice().filter(champ =>
                    champ.roles.includes(this.state.role) && champ.id !== placeholderChampion.id)
                    .sort((a, b) => b.rating - a.rating),
                active: '↓',
                ascending: false,
                search: 'Search by name...',
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
                    roles={this.state.champion.roles} changeRole={this.changeRole}
                    activeRole={this.state.role} playerName={this.state.name} id={this.state.champion.id}
                    playerPicture={this.state.portrait}
                    twitter={this.state.twitter} opgg={this.state.opgg} twitch={this.state.twitch}
                    youtube={this.state.youtube} description={this.state.biography} plug={this.state.plug}/>
                </div>
                <div className="matchup-table">
                    <MatchupTable championList={this.state.championList} search={this.state.search} 
                    ascending={this.state.ascending} active={this.state.active} 
                    handleTextChange={this.handleTextChange} resetText={this.resetText} 
                    swapRating={this.swapRating} text="Difficulty " page="champ"/>
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