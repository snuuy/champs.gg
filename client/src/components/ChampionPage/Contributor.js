import React from 'react';
import Linkify from 'react-linkify'

/* This component is the information section sitting at the top of each champion page, providing information about the contributor. */

export default class Contributor extends React.Component {
    render() {
        let { info, champion } = this.props;
        if (!info) {
            return (
                <div className="text-muted py-auto my-auto py-5">
                    {/* If the champion does not have a contributor. */}
                    We don't currently have information for {champion}. If you are or know an expert at {champion} and would like to contribute your opinions, please email us at champsdotgg@gmail.com.
                </div>
            )
        }
        return (
            <div className="bg-light py-3 rounded" style={{ minHeight: "150px" }}>
                <div className="w-100">
                    <img className="contrib-portrait float-md-left mr-3 ml-3" src={require('../../assets/contributors/' + info.name + '.jpg')} />
                    <div className="d-inline-block d-md-block align-middle">
                        <span className="d-block text-muted small text-uppercase mb-1" style={{ marginTop: "-3px" }}>
                            Opinions from
                        </span>
                        <div className="contrib-name">
                            {info.name}
                            <div className="socials h4 d-md-inline-block d-block ml-0 ml-md-3">
                                {info.twitter ?
                                    <a href={info.twitter} target="_blank"><i className="fab fa-twitter pr-1"></i></a> : <></>}
                                {info.twitch ?
                                    <a href={info.twitch} target="_blank"><i className="fab fa-twitch pr-1"></i></a> : <></>}
                                {info.youtube ?
                                    <a href={info.youtube} target="_blank"><i className="fab fa-youtube pr-1"></i></a> : <></>}
                                {info.instagram ?
                                    <a href={info.instagram} target="_blank"><i className="fab fa-instagram pr-1"></i></a> : <></>}
                                {info.facebook ?
                                    <a href={info.facebook} target="_blank"><i className="fab fa-facebook pr-1"></i></a> : <></>}
                                {info.opgg ?
                                    <a href={info.opgg} target="_blank"><i className="fas fa-user pr-1"></i></a> : <></>}
                            </div>
                        </div>
                    </div>
                    <div className="text-dark small py-0 my-0 overflow-hidden d-block p-3 p-md-0">
                        <Linkify properties={{ target: '_blank' }}>{info.bio + " "} {info.message ? info.message : ""}</Linkify>
                    </div>
                </div>
            </div>
        );
    }
}