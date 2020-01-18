import React from 'react';
import Search from '../LandingPage/Search.js'
import RatingToggle from '../LandingPage/RatingToggle'
import RoleToggle from '../LandingPage/RoleToggle'

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
            roleCounters: roleCounters,
            visibleCounters: roleCounters,
            roles: roles,
            selectedRole: this.props.roles[0],
            search: null
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
        let { roles, visibleCounters, selectedRole } = this.state;
        return (
            <div>
                <div className="row bg-light py-2 text-center border-top border-bottom search-bar">
                    <div className="col-md-3 col-12 my-auto">
                        <div className="form-group has-search my-auto">
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
                    <div className="col-6 my-auto d-md-block d-none">
                        <div className="d-inline-block text-muted mr-2 align-middle font-weight-bold">Role</div>
                        <select className="align-middle" onChange={(e) => this.selectRole(e.target.value)}>
                            {
                                roles.map(role =>
                                    <option value={role.toLowerCase()} name="role">{role}</option>
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
                <div className="row bg-white text-dark py-2 border-bottom font-weight-bold text-uppercase">
                    <div className="col-3">
                        Champion
                    </div>
                    <div className="col-1">
                        Difficulty
                    </div>
                    <div className="col-8 text-center">
                        Comments
                    </div>
                </div>
                {
                    visibleCounters.map((counter, i) =>
                        <div className="row bg-white border-bottom mt-0 py-2">

                            <div className="col-3 my-auto">
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
                            <div className="col-1 align-middle h2 my-auto text-center">
                                {counter.difficulty}
                            </div>
                            <div className="col-8 pl-3 my-auto">
                                {counter.comments}
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
