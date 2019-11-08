import React from 'react';
import '../css/RatingToggle.css';

export default class RatingToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "↓",
            ascending: false,
        };
        this.swap = this.swap.bind(this);
    }

    swap() {
        this.setState({
            active: this.state.ascending ? '↓' : '↑',
            ascending: !this.state.ascending,
        });
    }

    render() {
        return (
            <h1 className="toggle" onClick={this.swap}>{"Rating " + this.state.active}</h1>
        );
    }
}