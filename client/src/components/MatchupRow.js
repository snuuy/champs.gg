import React from 'react';
import colour from '../logic/colour.js';
import Button from './Button.js';
import '../css/MatchupRow.css'

export default class MatchupRow extends React.Component {
    rowStyles = {
        backgroundColor: colour(this.props.rating, this.props.page),
    }

    render() {
        return (
            <tbody>
                <tr className="champ-row" style={this.rowStyles}>
                    <td className="name-container">
                        <a href="#root" className="champ-name">{this.props.name}</a>
                    </td>
                    <td className="image-container">
                        <img className="champ-icon" src={this.props.icon} alt={this.props.name}/>
                    </td>
                    <td className="rating-container">
                        <h1 className="champ-rating">{this.props.rating}</h1>
                        <div className="button-container">
                            <Button value="5"/>
                            <Button value="4"/>
                            <Button value="3"/>
                            <Button value="2"/>
                            <Button value="1"/>
                        </div>  
                    </td>
                </tr>
            </tbody>
        );
    }

}