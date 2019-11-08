import React from 'react';
import '../css/RoleToggle.css';

export default class RoleToggle extends React.Component {
    constructor(props) {
        super(props);
        this.openRoleMenu = this.openRoleMenu.bind(this);
        this.selectRole = this.selectRole.bind(this);
    }

    openRoleMenu() {
        this.props.openRoleMenu();
    }

    selectRole(role) {
        this.props.selectRole(role);
    }

    render() {
        if (!this.props.menuOpen) {
            return (
                <h1 className="role_toggle" 
                onClick={this.openRoleMenu} 
                >{this.props.roles}</h1>
            );
        } else {
            return (
                <div className="role_contain">
                    <h1 className="role" onClick={() => {this.selectRole('Top')}}>Top</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.selectRole('Jungle')}}>Jung</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.selectRole('Mid')}}>Mid</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.selectRole('Bot')}}>Bot</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.selectRole('Support')}}>Supp</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.selectRole('All Roles')}}>All</h1>
                </div>
            );
        }
    }
}