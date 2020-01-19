import React from 'react';
export default class Contributor extends React.Component {
    render() {
        let { info, champion } = this.props;
        if (!info) {
            return (
                <div className="text-muted py-auto my-auto py-5">
                    We don't currently have information for {champion}. If you are or know an expert at {champion} and would like to contribute your opinions, please email us at champsdotgg@gmail.com.
                </div>
            )
        }
        return (
            <div className="row">
                <div className="w-100">
                    <img className="contrib-portrait float-left mr-3 ml-3" src={info.portrait} />
                    <span className="d-block text-muted small text-uppercase mb-1" style={{ marginTop: "-3px" }}>
                        Opinions by
                    </span>
                    <div className="contrib-name">
                        {info.name}
                        <div className="socials h4 d-inline-block ml-3">
                            {info.twitter ?
                                <a href={info.twitter}><i className="fab fa-twitter pr-1"></i></a> : <></>}
                            {info.twitch ?
                                <a href={info.twitch}><i className="fab fa-twitch pr-1"></i></a> : <></>}
                            {info.instagram ?
                                <a href={info.instagram}><i className="fab fa-instagram pr-1"></i></a> : <></>}
                            {info.facebook ?
                                <a href={info.facebook}><i className="fab fa-facebook pr-1"></i></a> : <></>}
                            {info.opgg ?
                                <a href={info.opgg}><i className="fas fa-user pr-1"></i></a> : <></>}
                        </div>
                    </div>
                    <div className="text-dark small py-0 my-0 overflow-hidden">
                        {info.bio}
                    </div>
                </div>
            </div>
        );
    }
}