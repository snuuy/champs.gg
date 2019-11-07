import React from 'react';
import '../css/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <tbody>
                <tr className="header-row">
                    <td className="name-header">
                        <h1 className="header-name">Name</h1>
                    </td>
                    <td className="image-header">
                        <h1 className="header-picture">Icon</h1>
                    </td>
                    <td className="roles-header">
                        <h1 className="header-roles">Roles</h1>
                    </td>
                    <td className="rating-header">
                        <h1 className="header-rating">Rating</h1>
                    </td>
                </tr>
            </tbody>
        );
    }
}
