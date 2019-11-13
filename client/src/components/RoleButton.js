import React from 'react';
import '../css/RoleButton.css';

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
                <button className="role-button-1" 
                onClick={ () => {this.changeDisplayedRole(this.props.role)}}>
                {this.props.role}</button>
            </div>
        );
    }
}