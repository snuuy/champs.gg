import React from 'react';
import Header from './Header.js';
import Row from './Row.js';

export default class Table extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row/>
            </div>
        );
    }
}