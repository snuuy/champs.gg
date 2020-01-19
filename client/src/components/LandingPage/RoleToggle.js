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
        const roles = ["All Roles", "Top", "Mid", "Jungle", "Support", "Bot"]
        return (
            <>
                <select className="custom-select align-middle pl-2 py-1 pr-5" onChange={(e) => this.selectRole(e.target.value)}>
                    {
                        roles.map((role, i) =>
                            <option key={role} value={role} name="role">{role}</option>
                        )
                    }
                </select>
            </>
        );
    }
}