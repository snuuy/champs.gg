import React from 'react';
import '../css/Search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(e) {
        this.props.handleTextChange(e.target.value);
    }

    reset(){
        this.props.resetText();
    }

    render() {
        return (
            <div>
                <input type="text"
                onChange={this.handleChange}
                value={this.props.search}
                onFocus={this.reset}
                onBlur={this.reset}></input>
            </div>
        );
    }
}