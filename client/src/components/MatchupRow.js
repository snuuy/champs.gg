import React from 'react';
import colour from '../logic/colour.js';
import Button from './Button.js';
import '../css/MatchupRow.css'

export default class MatchupRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            icon: this.props.icon,
            rating: this.props.rating,
        };
    }

    rowStyles = {
        backgroundColor: colour(this.props.rating),
    }

    render() {
        return (
            <tbody>
                <tr className="champ-row" style={this.rowStyles}>
                    <td className="name-container">
                        <a href="#root" className="champ-name">{this.state.name}</a>
                    </td>
                    <td className="image-container">
                        <img className="champ-icon" src={this.state.icon} alt={this.state.name}/>
                    </td>
                    <td className="rating-container">
                        <h1 className="champ-rating">{this.state.rating}</h1>
                        <div className="button-container">
                            <Button value="S"/>
                            <Button value="A"/>
                            <Button value="B"/>
                            <Button value="C"/>
                            <Button value="D"/>
                        </div>
                    </td>
                </tr>
            </tbody>
        );
    }

}