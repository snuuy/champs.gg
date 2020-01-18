import React from 'react';
import Search from './Search.js';
import RatingToggle from './RatingToggle.js';
import RoleToggle from './RoleToggle.js';
import '../../css/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <>
                <div className="row bg-light rounded py-2 text-center border mb-2">
                    <div className="col-4 my-auto">
                        <Search
                            search={this.props.search}
                            handleTextChange={this.props.handleTextChange}
                            resetText={this.props.resetText}
                            resetTextOffFocus={this.props.resetTextOffFocus} />
                    </div>
                    <div className="col-5 my-auto">
                        <RoleToggle
                            roles={this.props.roles}
                            menuOpen={this.props.menuOpen}
                            openRoleMenu={this.props.openRoleMenu}
                            selectRole={this.props.selectRole} />
                    </div>
                    <div className="col-3 my-auto">
                        <RatingToggle
                            active={this.props.active}
                            ascending={this.props.ascending}
                            swapRating={this.props.swapRating}
                            text="Rating " />
                    </div>
                </div>
                <div className="d-none row bg-light py-2 text-center border font-weight-bold text-dark">
                    <div className="col-4 my-auto">
                        Champion
                    </div>
                    <div className="col-4 my-auto">
                        Roles
                    </div>
                    <div className="col-1 my-auto">
                        Tier
                    </div>
                    <div className="col-3 my-auto">
                        Vote
                    </div>
                </div>
            </>
        );
    }
}
