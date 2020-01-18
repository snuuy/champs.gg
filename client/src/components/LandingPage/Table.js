import React from 'react';
import Header from './Header';
import Card from './Card';
import '../../css/Table.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: '',
            roles: 'All Roles',
            ascending: false,
            menuOpen: false,
            active: '↓',
            champions: [],
            champData: []
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.resetText = this.resetText.bind(this);
        this.resetTextOffFocus = this.resetTextOffFocus.bind(this);
        this.openRoleMenu = this.openRoleMenu.bind(this);
        this.selectRole = this.selectRole.bind(this);
        this.swapRating = this.swapRating.bind(this);
        this.sortChampions = this.sortChampions.bind(this);
    }

    componentDidMount() {
        var request = new XMLHttpRequest();
        request.open("GET", "/api/champion/all");
        request.send();
        request.onreadystatechange = event => {
            if (event.target.readyState === 4 && event.target.status === 200 && event.target.responseText) {
                const response = JSON.parse(event.target.responseText);
                response.sort((a, b) => b.score - a.score)
                this.setState({ champData: response, champions: response, loading: false })
            }
        }
    }

    handleTextChange(value) {
        this.setState({
            search: value,
        }, () => {
            this.setState({
                champions: this.sortChampions(this.state.champData.slice()),
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

    openRoleMenu() {
        this.setState({
            menuOpen: true,
        });
    }

    selectRole(role) {
        this.setState({
            roles: role,
            menuOpen: false,
        }, () => {
            this.setState({
                champions: this.sortChampions(this.state.champData.slice()),
            })
        });
    }

    swapRating(e) {
        console.log(e.target.value)
        this.setState({
            ascending: e.target.value == "high",
        }, () => {
            this.setState({
                champions: this.sortChampions(this.state.champData.slice()),
            });
        });
    }

    sortChampions(champions) {
        if (this.state.search !== '' && this.state.search !== 'Search by name...') {
            champions = champions.filter(champ => champ.name.toUpperCase().includes(this.state.search.toUpperCase()));
        }
        switch (this.state.roles) {
            case 'Top':
                champions = champions.filter(champ => champ.roles.includes('Top'));
                break;
            case 'Jungle':
                champions = champions.filter(champ => champ.roles.includes('Jungle'));
                break;
            case 'Mid':
                champions = champions.filter(champ => champ.roles.includes('Mid'));
                break;
            case 'Bot':
                champions = champions.filter(champ => champ.roles.includes('Bot'));
                break;
            case 'Support':
                champions = champions.filter(champ => champ.roles.includes('Support'));
                break;
            default:
        }
        if (!this.state.ascending) {
            champions.sort((a, b) => a.score - b.score);
        } else {
            champions.sort((a, b) => b.score - a.score);
        }
        return champions;
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="text-center mb-5">
                    <div className="table-loading"></div>
                </div>
            )
        }
        return (
            <div class="table">
                <Header
                    search={this.state.search} roles={this.state.roles} ascending={this.state.ascending}
                    menuOpen={this.state.menuOpen} active={this.state.active} handleTextChange={this.handleTextChange}
                    resetText={this.resetText} openRoleMenu={this.openRoleMenu} selectRole={this.selectRole}
                    swapRating={this.swapRating} page="main" resetTextOffFocus={this.resetTextOffFocus}
                />
                <div className="row mx-0">
                    {this.state.champions.map(champion =>
                        <Card key={champion.shortname} name={champion.name}
                            icon={"https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/" + champion.shortname + ".png"}
                            roles={champion.roles.join(', ')} rating={champion.score.toFixed(2)} page="main"
                            champId={champion.shortname}
                            userVote={champion.userVote}
                        />
                    )}
                </div>
            </div>
        );
    }
}
