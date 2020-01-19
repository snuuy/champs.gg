import React from 'react';
import Search from './Search.js';
import RatingToggle from './RatingToggle.js';
import RoleToggle from './RoleToggle.js';
import '../../css/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <>
                <div className="row bg-light rounded py-2 text-center border mb-2 mx-2">
                    <div className="col-md-6 col-12 my-auto text-md-left text-center">
                        <Search
                            search={this.props.search}
                            handleTextChange={this.props.handleTextChange}
                            resetText={this.props.resetText}
                            resetTextOffFocus={this.props.resetTextOffFocus} />
                    </div>
                    <div className="col-md-6 col-12 my-auto text-md-right text-left mt-3 mt-md-0">
                        <div className="d-inline-block mr-2 align-middle">
                            <RoleToggle
                                role={this.props.role}
                                menuOpen={this.props.menuOpen}
                                openRoleMenu={this.props.openRoleMenu}
                                selectRole={this.props.selectRole} />
                        </div>
                        <div className="d-inline-block align-middle">
                            <RatingToggle
                                active={this.props.active}
                                ascending={this.props.ascending}
                                swapRating={this.props.swapRating}
                                text="Rating " />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
