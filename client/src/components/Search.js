import React from 'react';
import '../css/Search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Search by name...',
        };
        this.handleChange = this.handleChange.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    handleChange(e) {
        this.setState({
            active: e.target.value,
        });
    }

    clearField(){
        this.setState({
            active: '',
        })
    }

    render() {
        return (
            <div>
                <input type="text"
                onChange={this.handleChange}
                value={this.state.active}
                onFocus={this.clearField}></input>
            </div>
        );
    }
}