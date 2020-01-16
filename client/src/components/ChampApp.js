import React from 'react';
import ChampInfo from './ChampInfo';
import MatchupTable from './MatchupTable';
import champData from '../data/champData';
import '../css/App.css';

var response;

/*
            championList: champData.slice().filter(champ =>
                champ.roles.includes(initialRole) && champ.id !== placeholderChampion.id)
                .sort((a, b) => b.rating - a.rating),
*/

export default class ChampApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            championList: [{_id: "", champion: {totalScore: 0, roles: [""], _id: "",
            name: "", shortname: "", _v: 0, id: ""}, difficulty: 0, comments: "",}],
            search: 'Search by name...',
            ascending: false,
            active: '↓',
            roleList: [],
        }
        this.changeRole = this.changeRole.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.resetText = this.resetText.bind(this);
        this.resetTextOffFocus = this.resetTextOffFocus.bind(this);
        this.swapRating = this.swapRating.bind(this);
        this.sortChampions = this.sortChampions.bind(this);
    }

    componentDidMount() {
        var request = new XMLHttpRequest();
        request.open("GET", "/api/champion/" + this.props.match.params.id.toLowerCase());
        request.send();
        request.onreadystatechange = event => {
            if (event.target.readyState === 4 && event.target.status === 200 && event.target.responseText) {
                response = JSON.parse(event.target.responseText);
                this.setState({
                    champName: response.name,
                    name: response.contributors[0].name,
                    id: response.shortname,
                    portrait: response.contributors[0].portrait,
                    twitter: response.contributors[0].twitter,
                    twitch: response.contributors[0].twitch,
                    youtube: response.contributors[0].youtube,
                    biography: response.contributors[0].bio,
                    plug: response.contributors[0].message,
                    roleList: response.roles,
                    role: response.roles[0],
                    championList: response.counters[0].champions.slice().sort((a, b) => b.difficulty - a.difficulty),
                })
            }
        }
    }

    getIndex = selectedRole => {
        return selectedRole === this.state.role;
    }

    changeRole(role) {
        this.setState({
            role: role,
        }, () => {
            this.setState({
                championList: response.counters[this.state.roleList.findIndex(this.getIndex)].champions.slice()
                    .sort((a, b) => b.difficulty - a.difficulty),
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
                championList: this.sortChampions(response.counters[this.state.roleList.findIndex(this.getIndex)]
                    .champions.slice()),
            })
        });
    }

    resetText() {
        if (this.state.search === 'Search by name...') {
            this.setState({
                search: '',
            })
        }
    }

    resetTextOffFocus() {
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
                championList: this.sortChampions(response.counters[this.state.roleList.findIndex(this.getIndex)]
                    .champions.slice()),
            });
        });
    }

    sortChampions(champions) {
        if (this.state.search !== '' && this.state.search !== 'Search by name...') {
            champions = champions.filter(champ => champ.champion.name.toUpperCase().includes(this.state.search.toUpperCase()));
        }
        if (this.state.ascending) {
            champions.sort((a, b) => a.difficulty - b.difficulty);
        } else {
            champions.sort((a, b) => b.difficulty - a.difficulty);
        }
        return champions;
    }

    render() {
        return (
            <div>
                <div className="champ-info-container">
                    <ChampInfo name={this.state.champName}
                        changeRole={this.changeRole}
                        activeRole={this.state.role} playerName={this.state.name} id={this.state.id}
                        playerPicture={this.state.portrait} 
                        twitter={this.state.twitter} opgg={this.state.opgg} twitch={this.state.twitch}
                        youtube={this.state.youtube} description={this.state.biography} plug={this.state.plug}
                        roles={this.state.roleList} />
                </div>
                <div className="matchup-table">
                    <MatchupTable championList={this.state.championList} search={this.state.search}
                        ascending={this.state.ascending} active={this.state.active}
                        handleTextChange={this.handleTextChange} resetText={this.resetText} 
                        resetTextOffFocus={this.resetTextOffFocus} swapRating={this.swapRating} 
                        text="Difficulty " page="champ" />
                </div>
                <p className="riot">
                    champs.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games
                    or anyone <br /> officially involved in producing or managing League of Legends. League of Legends
                    and Riot Games are <br /> trademarks or registered trademarks of Riot Games, Inc. League of Legends
                    © Riot Games, Inc.
                </p>
            </div>
        );
    }
}