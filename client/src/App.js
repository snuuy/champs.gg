import React from 'react';
import Table from './components/Table.js';
import './css/App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="app-table">
                <Table/>
            </div>
        );
    }
}