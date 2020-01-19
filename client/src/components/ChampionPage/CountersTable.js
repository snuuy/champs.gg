import React from 'react';
import RatingToggle from '../LandingPage/RatingToggle'
import ShowMoreText from 'react-show-more-text';
export default class CountersTable extends React.Component {

    constructor(props) {
        super(props)
        let roleCounters = this.props.counters[0].champions;
        roleCounters.sort((a, b) => b.difficulty - a.difficulty);
        let roles = []
        for (let c of this.props.counters) {
            roles.push(this.capitalize(c.role))
        }
        this.state = {
            counters: this.props.counters,
            contributorName: this.props.contributorName,
            roleCounters: roleCounters,
            visibleCounters: roleCounters,
            roles: roles,
            selectedRole: this.props.roles[0],
            search: ""
        }
        this.selectRole = this.selectRole.bind(this);
        this.search = this.search.bind(this);
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    selectRole(role) {
        this.setState({ selectedRole: role })
        for (let c of this.state.counters) {
            if (c.role == role) {
                c.champions.sort((a, b) => b.difficulty - a.difficulty)
                this.setState({ roleCounters: c.champions, visibleCounters: c.champions, search: "" })
                break;
            }
        }
    }

    search(text) {
        this.setState({ search: text })
        if (text == null || text.length == 0)
            this.setState({ visibleCounters: this.state.roleCounters })
        let filtered = this.state.roleCounters.filter(counter => counter.champion.name.toUpperCase().includes(text.toUpperCase()));
        this.setState({ visibleCounters: filtered })
    }



    render() {
        let { roles, visibleCounters, contributorName } = this.state;
        return (
            <div>
                <div className="row bg-light py-2 text-center border-top border-bottom">
                    <div className="col-md-5 col-7 my-auto text-left">
                        <div className="form-group has-search my-auto d-inline-block">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input className="d-inline-block search-input form-control" type="text"
                                onChange={(e) => this.search(e.target.value)}
                                value={this.state.search}
                                onFocus={this.reset}
                                onBlur={this.resetFocus}
                                placeholder="Search by name"
                            />
                        </div>
                    </div>
                    <div className="col-md-2 col-0 d-none d-md-block font-weight-bold my-auto h4 pl-3 text-center">
                        Matchups
                    </div>
                    <div className="col-5 col-md-5 my-auto text-right">
                        <div className="d-inline-block text-muted mr-2 align-middle font-weight-bold">Role</div>
                        <select className="custom-select pl-2 py-1 pr-md-5 pr-sm-4 align-middle d-inline-block w-auto" onChange={(e) => this.selectRole(e.target.value)}>
                            {
                                roles.map((role, i) =>
                                    <option key={i} value={role.toLowerCase()} name="role">{role}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="d-none col-3 my-auto text-right pr-4">
                        <RatingToggle
                            active={this.props.active}
                            ascending={this.props.ascending}
                            swapRating={this.props.swapRating}
                            text="Rating " />
                    </div>
                </div>
                <div className="row bg-white text-dark py-2 border-bottom font-weight-bold text-uppercase d-none d-md-flex">
                    <div className="col-lg-3 col-md-4">
                        Champion
                    </div>
                    <div className="col-2">
                        Difficulty
                        <i
                            className="fas fa-info-circle text-muted pl-2"
                            data-tip="A higher number indicates a more difficult matchup"></i>
                    </div>
                    <div className="col-lg-7 col-md-5 text-center">
                        Comments
                        <i
                            className="fas fa-info-circle text-muted pl-2"
                            data-tip={"Opinions are provided by " + contributorName}></i>
                    </div>
                </div>
                {
                    visibleCounters.map((counter, i) =>
                        <div key={i} className="row bg-white border-bottom mt-0 py-2">

                            <div className="col-lg-3 col-md-4 col-9 my-auto">
                                <a href={"/" + counter.champion.shortname}>
                                    <div className="d-inline-block align-middle">
                                        <img
                                            className="mr-3"
                                            style={{ width: "50px", height: "50px" }}
                                            src={"https://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/" + counter.champion.shortname + ".png"}
                                            alt={counter.champion.name}
                                        />
                                    </div>
                                    <div className="d-inline-block align-middle">
                                        <span className="champ-name h4 text-dark">{counter.champion.name}</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-1 col-3 align-middle h2 my-auto text-center difficulty-font">
                                {counter.difficulty}
                            </div>
                            <div className="col-lg-8 col-md-7 pl-3 my-auto pt-2 pt-md-0 comments-text text-dark">
                                {counter.comments ?
                                    <ShowMoreText
                                        lines={2}
                                        more={<span className="small">Show more</span>}
                                        less={<span className="small">Show less</span>}
                                        expanded={false}
                                    >
                                        {counter.comments}
                                    </ShowMoreText>
                                    : <></>}
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
