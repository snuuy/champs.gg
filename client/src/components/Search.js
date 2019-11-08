import React from 'react';
import '../css/Search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Search by name...',
        };
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(e) {
        this.setState({
            active: e.target.value,
        });
    }

    reset(){
        if (this.state.active == 'Search by name...') {
            this.setState({
                active: '',
            })
        }
        if (this.state.active == '') {
            this.setState({
                active: 'Search by name...',
            });
        }
    }

    render() {
        return (
            <div>
                <input type="text"
                onChange={this.handleChange}
                value={this.state.active}
                onFocus={this.reset}
                onBlur={this.reset}></input>
            </div>
        );
    }
}