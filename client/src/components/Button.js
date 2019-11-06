import React from 'react';
import '../css/Button.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.value,
        };
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}
