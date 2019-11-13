import React from 'react';
import '../css/RoleButton.css';

export default class RoleButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <button className="role-button-1">{this.props.role}</button>
            </div>
        );
    }
}