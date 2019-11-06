import React from 'react';
import Button from './Button.js';
import '../css/Row.css'

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ahri",
            icon: 'https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/Ahri.png',
            roles: "Top, Mid",
            rating: 4.73,
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
                        <h1 className="roles">{this.state.roles}</h1>
                    </td>
                    <td className="rating-container">
                        <h1 className="rating">{this.state.rating}</h1>
                        <div className="button-container">
                            <Button value="1"/>
                            <Button value="2"/>
                            <Button value="3"/>
                            <Button value="4"/>
                            <Button value="5"/>
                        </div>
                    </td>
                </tr>
            </tbody>
        );
    }
}
