import React from 'react';
import CountersTable from './CountersTable'
import Voting from '../Voting'
import Contributor from './Contributor'
import Tooltip from 'react-tooltip'
import '../../css/ChampionPage.css'
import '../../css/Card.css'
export default class ChampionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            champion: {},
            loading: true
        };
    }

    componentDidMount() {
        var request = new XMLHttpRequest();
        request.open("GET", "/api/champion/" + this.props.match.params.id);
        request.send();
        request.onreadystatechange = event => {
            if (event.target.readyState === 4 && event.target.status === 200 && event.target.responseText) {
                const response = JSON.parse(event.target.responseText);
                console.log(response)
                this.setState({ champion: response, loading: false })
            }
            if (event.target.status === 400) {
                //alert("champion not found")
            }
        }
    }

    ratingToTier(rating) {
        if (rating == 0) return "?"
        if (rating >= 4.5) return "S";
        if (rating >= 4) return "A"
        if (rating >= 3) return "B";
        if (rating >= 2) return "C";
        if (rating >= 1) return "D";
    }

    render() {
        let { champion } = this.state
        let tier = this.ratingToTier(champion.numVotes == 0 ? 0 : champion.totalScore / champion.numVotes)
        if (this.state.loading) {
            return (
                <div className="my-5 text-center">
                    <div className="page-loading"></div>
                </div>
            )
        }
        return (
            <>
                <Tooltip />
                <div className="container p-0 p-md-3 mt-lg-3">
                    <div
                        className="champ-splash w-100 d-none d-md-block rounded-top"
                        style={{ backgroundImage: "url('https://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-" + champion.shortname.toLowerCase() + ".jpg')" }}
                    >

                    </div>
                    <div className="bg-white">
                        <div className="row px-4 py-3 my-auto">
                            <div className="col-12 col-lg-5 mb-3 mb-lg-0 mt-3 mt-md-0">
                                <div className="d-inline-block align-middle">
                                    <img
                                        className="mr-3"
                                        src={"https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/" + champion.shortname + ".png"}
                                        alt={champion.name}
                                    />
                                </div>
                                <div class="d-inline-block align-middle">
                                    <div className="h1 font-weight-bold text-dark mb-0 pb-0">{champion.name}</div>
                                    <div className="ml-1 mb-2 small text-uppercase text-muted align-middle">{champion.roles.join(', ')}</div>
                                    <Voting
                                        champId={champion.shortname}
                                        userVote={champion.userVote}
                                        rating={champion.numVotes == 0 ? 0 : champion.totalScore / champion.numVotes}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-7">
                                <Contributor champion={champion.name} info={champion.contributors[0]} />
                            </div>
                        </div>
                    </div>
                    <div className="mx-3">
                        {champion.counters.length > 0 && champion.contributors.length > 0 ?
                            <CountersTable contributorName={champion.contributors[0].name} counters={champion.counters} roles={champion.roles} />
                            : <></>}
                    </div>
                    <p className="riot text-center small my-4">
                        champs.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games
                    or anyone <br /> officially involved in producing or managing League of Legends. League of Legends
                    and Riot Games are <br /> trademarks or registered trademarks of Riot Games, Inc. League of Legends
                                                                                © Riot Games, Inc.
                </p>
                </div>
            </>
        );
    }
}
