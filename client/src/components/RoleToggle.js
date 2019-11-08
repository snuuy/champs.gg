import React from 'react';
import '../css/RoleToggle.css';

export default class RoleToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'All Roles',
            menuOpen: false,
        };
        this.openMenu = this.openMenu.bind(this);
        this.select = this.select.bind(this);
    }

    openMenu() {
        this.setState({
            menuOpen: true,
        });
    }

    select(role) {
        this.setState({
            role: role,
            menuOpen: false,
        });
    }

    render() {
        if (!this.state.menuOpen) {
            return (
                <h1 className="role_toggle" 
                onClick={this.openMenu} 
                >{this.state.role}</h1>
            );
        } else {
            return (
                <div className="role_contain">
                    <h1 className="role" onClick={() => {this.select('Top')}}>Top</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.select('Jungle')}}>Jung</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.select('Mid')}}>Mid</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.select('Bot')}}>Bot</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.select('Support')}}>Supp</h1><h3>|</h3>
                    <h1 className="role" onClick={() => {this.select('All Roles')}}>All</h1>
                </div>
            );
        }
    }
}