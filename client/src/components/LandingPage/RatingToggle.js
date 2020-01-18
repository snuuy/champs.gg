import React from 'react';
import '../../css/RatingToggle.css';

export default class RatingToggle extends React.Component {
    constructor(props) {
        super(props);
        this.swapRating = this.swapRating.bind(this);
    }

    swapRating(e) {
        this.props.swapRating(e);
    }

    render() {
        return (
            <div className="align-middle">
                <select className="p-1" onChange={this.swapRating}>
                    <option value="high">Highest rating</option>
                    <option value="low">Lowest rating</option>
                </select>
            </div>
        );
    }
}