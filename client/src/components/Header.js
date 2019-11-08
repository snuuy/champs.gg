import React from 'react';
import Search from './Search.js';
import RatingToggle from './RatingToggle.js';
import RoleToggle from './RoleToggle.js';
import '../css/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <tbody>
                <tr className="header-row">
                    <td className="name-header">
                        <Search/>
                    </td>
                    <td className="roles-header">
                        <RoleToggle/>
                    </td>
                    <td className="rating-header">
                        <RatingToggle/>
                    </td>
                </tr>
            </tbody>
        );
    }
}
