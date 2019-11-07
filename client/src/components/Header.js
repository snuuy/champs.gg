import React from 'react';
import '../css/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <tbody>
                <tr className="header-row">
                    <td className="name-header">
                        <h1 className="header-name">Search by name...</h1>
                    </td>
                    <td className="roles-header">
                        <h1 className="header-roles">All Roles</h1>
                    </td>
                    <td className="rating-header">
                        <h1 className="header-rating">Rating ↓</h1>
                    </td>
                </tr>
            </tbody>
        );
    }
}
