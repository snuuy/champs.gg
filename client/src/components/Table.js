import React from 'react';
import Header from './Header.js';
import returnRows from '../logic/returnRows.js';
import '../css/Table.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'Search by name...',
            roles: 'All Roles',
            ascending: false,
            menuOpen: false,
            active: '↓',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.resetText = this.resetText.bind(this);
        this.openRoleMenu = this.openRoleMenu.bind(this);
        this.selectRole = this.selectRole.bind(this);
        this.swapRating = this.swapRating.bind(this);
    }

    handleTextChange(value) {
        this.setState({
            search: value,
        });
    }

    resetText(){
        if (this.state.search === 'Search by name...') {
            this.setState({
                search: '',
            })
        }
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
        });
    }

    swapRating() {
        this.setState({
            active: this.state.ascending ? '↓' : '↑',
            ascending: !this.state.ascending,
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Header
                    search={this.state.search} roles={this.state.roles} ascending={this.state.ascending}
                    menuOpen={this.state.menuOpen} active={this.state.active} handleTextChange={this.handleTextChange}
                    resetText={this.resetText} openRoleMenu={this.openRoleMenu} selectRole={this.selectRole}
                    swapRating={this.swapRating}
                    />
                </div>
                {returnRows()}
            </div>
        );
    }
}