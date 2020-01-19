import React from 'react';
import '../../css/Card.css';
import Voting from '../Voting';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            icon: this.props.icon,
            roles: this.props.roles,
            rating: this.props.rating,
            userVote: this.props.userVote,
            voteLoading: [false, false, false, false, false]
        };
    }

    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-2 my-2">
                <div className="card">
                    <div className="m-2">
                        <div className="d-inline-block align-middle">
                            <a href={this.props.champId}>
                                <img
                                    className="mr-3"
                                    style={{ "maxHeight": "60px", "borderRadius": "50%" }}
                                    src={this.state.icon}
                                    alt={this.state.name}
                                />
                            </a>
                        </div>
                        <div className="d-inline-block align-middle">
                            <a href={this.props.champId} className="champ-name h4 text-dark">{this.state.name}</a>
                            <span className="d-block small text-muted text-uppercase">{this.state.roles}</span>
                        </div>
                    </div>


                    <Voting userVote={this.state.userVote} champId={this.props.champId} rating={this.state.rating} isCard={true} />

                </div>
            </div>
        );
    }
}