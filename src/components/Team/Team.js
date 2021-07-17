import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';

const Team = (props) => {
    const {strTeamBadge, strTeamLogo, strSport, strAlternate, idTeam} = props.team;

    const history = useHistory();

    const handleClick = (teamId) => {
        const url = `/team/${teamId}`
        history.push(url);
    }

    return (
        <div className="team">
            <div className="team-object">
                <img src={strTeamBadge} alt="" />
                <img src={strTeamLogo} alt="" />
                <p>Sports type: {strSport}</p>
                <h2>{strAlternate}</h2>
                <button className="main-button" onClick={() => handleClick(idTeam)}>Explore<FontAwesomeIcon icon={faFutbol} /></button>
            </div>
        </div>
    );
};

export default Team;