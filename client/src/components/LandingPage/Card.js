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

    ratingToTier(rating) {
        if (rating == 0) return "?"
        if (rating >= 4.5) return "S";
        if (rating >= 4) return "A"
        if (rating >= 3) return "B";
        if (rating >= 2) return "C";
        if (rating >= 1) return "D";
    }



    vote(rating) {
        if (rating == this.state.userVote) return;
        let { voteLoading } = this.state;
        voteLoading[rating - 1] = true;
        this.setState({ voteLoading });
        var request = new XMLHttpRequest();
        request.open("POST", "/api/vote/champion");
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify({
            championId: this.props.champId,
            score: rating
        }));
        request.onreadystatechange = event => {
            if (event.target.readyState === 4) {
                voteLoading[rating - 1] = false;
                this.setState({ voteLoading });
                this.setState({ userVote: rating })
                if (event.target.status === 200) {

                }
                else {
                    alert(event.target.responseText)
                }
            }
        }
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