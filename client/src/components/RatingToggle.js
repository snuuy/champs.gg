import React from 'react';
import '../css/RatingToggle.css';

export default class RatingToggle extends React.Component {
    constructor(props) {
        super(props);
        this.swapRating = this.swapRating.bind(this);
    }

    swapRating() {
        this.props.swapRating();
    }

    render() {
        return (
            <h1 className="toggle" onClick={this.swapRating}>{this.props.text + this.props.active}</h1>
        );
    }
}