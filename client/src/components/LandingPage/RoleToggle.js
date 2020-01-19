import React from 'react';

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
        return (
            <>
                <div onClick={() => { this.selectRole('Top') }} className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" checked={this.props.role == "Top"} />
                    <label className="form-check-label text-uppercase text-muted small">Top</label>
                </div>

                <div onClick={() => { this.selectRole('Mid') }} className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" checked={this.props.role == "Mid"} />
                    <label className="form-check-label text-uppercase text-muted small">Mid</label>
                </div>

                <div onClick={() => { this.selectRole('Jungle') }} className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" checked={this.props.role == "Jungle"}></input>
                    <label className="form-check-label text-uppercase text-muted small">Jungle</label>
                </div>

                <div onClick={() => { this.selectRole('Support') }} className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" checked={this.props.role == "Support"} />
                    <label className="form-check-label text-uppercase text-muted small">Support</label>
                </div>

                <div onClick={() => { this.selectRole('Bot') }} className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" checked={this.props.role == "Bot"} />
                    <label className="form-check-label text-uppercase text-muted small">Bot</label>
                </div>

                <div onClick={() => { this.selectRole('All Roles') }} className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" checked={this.props.role == "All"} />
                    <label className="form-check-label text-uppercase text-muted small">All</label>
                </div>
            </>
        );
    }
}