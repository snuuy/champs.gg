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
                <select className="custom-select align-middle pl-2 py-1 pr-5" onChange={this.swapRating}>
                    <option value="high">Highest Tier</option>
                    <option value="low">Lowest Tier</option>
                </select>
            </div>
        );
    }
}