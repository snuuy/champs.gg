import React from 'react';
import '../../css/Search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
        this.resetFocus = this.resetFocus.bind(this);
    }

    handleChange(e) {
        this.props.handleTextChange(e.target.value);
    }

    reset() {
        this.props.resetText();
    }

    resetFocus() {
        this.props.resetTextOffFocus();
    }

    render() {
        return (
            <div className="form-group has-search my-auto">
                <span className="fa fa-search form-control-feedback"></span>
                <input className="d-inline-block search-input form-control" type="text"
                    onChange={this.handleChange}
                    value={this.props.search}
                    onFocus={this.reset}
                    onBlur={this.resetFocus}
                    placeholder="Search by name..."
                />
            </div>
        );
    }
}