import React from 'react';

export default class RoleButton extends React.Component {
    constructor(props) {
        super(props);
        this.changeDisplayedRole = this.changeDisplayedRole.bind(this);
    }

    changeDisplayedRole(role) {
        this.props.changeRole(role);
    }

    render() {
        return (
            <div>
                <button className={this.props.activeRole === this.props.role ? "active" : "inactive"}
                    style={this.props.styles} onClick={() => { this.changeDisplayedRole(this.props.role) }}>
                    {this.props.role}</button>
            </div>
        );
    }
}