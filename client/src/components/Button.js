import React from 'react';
import '../css/Button.css';

export default class Button extends React.Component {
    render() {
        return (
            <div>
                <button>{this.props.value}</button>
            </div>
        );
    }
}
