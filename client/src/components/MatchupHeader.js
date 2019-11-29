import React from 'react';
import Search from './Search.js';
import RatingToggle from './RatingToggle.js';
import '../css/Header.css';

export default class MatchupHeader extends React.Component {
    render() {
        return (
            <tbody>
                <tr className="header-row">
                    <td className="name-header">
                        <Search 
                        search={this.props.search}
                        handleTextChange={this.props.handleTextChange}
                        resetText={this.props.resetText}/>
                    </td>
                    <td className="rating-header">
                        <RatingToggle
                        active={this.props.active}
                        ascending={this.props.ascending}
                        swapRating={this.props.swapRating}
                        text={this.props.text}/>
                    </td>
                    <td className="comment-header">
                        <h5>Comments</h5>
                    </td>
                </tr>
            </tbody>
        );
    }
}
