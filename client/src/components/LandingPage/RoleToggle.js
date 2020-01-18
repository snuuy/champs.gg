import React from 'react';
import '../../css/RoleToggle.css';

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
                <div onClick={() => { this.selectRole('Top') }} class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="role" />
                    <label class="form-check-label text-uppercase text-muted small">Top</label>
                </div>

                <div onClick={() => { this.selectRole('Mid') }} class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="role" />
                    <label class="form-check-label text-uppercase text-muted small">Mid</label>
                </div>

                <div onClick={() => { this.selectRole('Jungle') }} class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="role"></input>
                    <label class="form-check-label text-uppercase text-muted small">Jungle</label>
                </div>

                <div onClick={() => { this.selectRole('Support') }} class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="role" />
                    <label class="form-check-label text-uppercase text-muted small">Support</label>
                </div>

                <div onClick={() => { this.selectRole('Bot') }} class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="role" />
                    <label class="form-check-label text-uppercase text-muted small">Bot</label>
                </div>

                <div onClick={() => { this.selectRole('All Roles') }} class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="role" />
                    <label class="form-check-label text-uppercase text-muted small">All</label>
                </div>
            </>
        );
    }
}