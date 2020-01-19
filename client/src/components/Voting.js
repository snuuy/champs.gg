import React from 'react';
import '../css/Card.css';

export default class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating,
            userVote: this.props.userVote,
            voteLoading: [false, false, false, false, false]
        };
    }

    ratingToTier(rating) {
        if (rating == 0) return "?"
        if (rating >= 4.7) return "S+";
        if (rating >= 4.5) return "S";
        if (rating >= 4.2) return "S-";
        if (rating >= 4) return "A+";
        if (rating >= 3.8) return "A";
        if (rating >= 3.5) return "A-";
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
        let { isCard } = this.props;
        return (
            <ul className="list-group list-group-flush">
                <li className={"list-group-item " + (isCard ? "border-top" : "p-0")}>
                    <div className="row">
                        <div className={"col-2 " + (isCard ? "" : "pl-0")}>
                            <div className={"champ-rating-solid rating-" + this.ratingToTier(this.state.rating)}>
                                {this.ratingToTier(this.state.rating)}
                            </div>
                        </div>
                        <div className={"col-10 " + (isCard ? "text-right" : "text-left pr-0 pl-2")}>
                            <div
                                onClick={() => this.vote(5)}
                                className={
                                    (this.state.voteLoading[4] ? "champ-rating-loading" : "champ-rating")
                                    + (this.state.userVote == 5 ? " champ-rating-voted" : "")
                                }
                            >
                                S
                                    </div>
                            <div
                                onClick={() => this.vote(4)}
                                className={
                                    (this.state.voteLoading[3] ? "champ-rating-loading" : "champ-rating")
                                    + (this.state.userVote == 4 ? " champ-rating-voted" : "")
                                }
                            >
                                A
                                    </div>
                            <div
                                onClick={() => this.vote(3)}
                                className={
                                    (this.state.voteLoading[2] ? "champ-rating-loading" : "champ-rating")
                                    + (this.state.userVote == 3 ? " champ-rating-voted" : "")
                                }
                            >
                                B
                                    </div>
                            <div
                                onClick={() => this.vote(2)}
                                className={
                                    (this.state.voteLoading[1] ? "champ-rating-loading" : "champ-rating")
                                    + (this.state.userVote == 2 ? " champ-rating-voted" : "")
                                }
                            >
                                C
                                    </div>
                            <div
                                onClick={() => this.vote(1)}
                                className={
                                    (this.state.voteLoading[0] ? "champ-rating-loading" : "champ-rating")
                                    + (this.state.userVote == 1 ? " champ-rating-voted" : "")
                                }
                            >
                                D
                                    </div>
                        </div>
                    </div>
                </li>
            </ul >
        );
    }
}