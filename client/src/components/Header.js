import React from 'react';
import Search from './Search.js';
import RatingToggle from './RatingToggle.js';
import RoleToggle from './RoleToggle.js';
import '../css/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <tbody>
                <tr className="header-row">
                    <td className="name-header">
                        <Search 
                        search={this.props.search}
                        handleTextChange={this.props.handleTextChange}
                        resetText={this.props.resetText}/>
                    </td>
                    <td className="roles-header">
                        <RoleToggle
                        roles={this.props.roles}
                        menuOpen={this.props.menuOpen}
                        openRoleMenu={this.props.openRoleMenu}
                        selectRole={this.props.selectRole}/>
                    </td>
                    <td className="rating-header">
                        <RatingToggle
                        active={this.props.active}
                        ascending={this.props.ascending}
                        swapRating={this.props.swapRating}
                        text="Rating "/>
                    </td>
                </tr>
            </tbody>
        );
    }
}
