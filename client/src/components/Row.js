import React from 'react';
import Button from './Button.js';
import '../css/Row.css'

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            icon: this.props.icon,
            roles: this.props.roles,
            rating: this.props.rating,
        };
    }

    render() {
        return (
            <tbody>
                <tr className="champ-row">
                    <td className="name-container">
                        <h1 className="champ-name">{this.state.name}</h1>
                    </td>
                    <td className="image-container">
                        <img className="champ-icon" src={this.state.icon}/>
                    </td>
                    <td className="roles-container">
                        <h1 className="champ-roles">{this.state.roles}</h1>
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
