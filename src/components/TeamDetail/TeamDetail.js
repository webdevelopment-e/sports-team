import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetail.css';
import image from '../../images/stadion.jpg';
import playerimg from '../../images/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDirections, faFlag, faFutbol, faVenus} from '@fortawesome/free-solid-svg-icons'; 
import {faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';




const TeamDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(teams => setTeam(teams.teams[0]))
    })

    


    return (
        <div className="team-detail">
                <img style={{height: '400px', width: '1600px'}} src={image} alt=""/>
                <br />
            <div className="middle-part">
                <img style={{width: '150px'}}src={team.strTeamLogo} alt="" />
                <h3>{team.strAlternate}</h3>
            </div>
            

            
                    <div className="container">
                        <div className="half-width-one">
                            <h2>{team.strLeague}</h2>
                            <p><FontAwesomeIcon icon={faDirections}/>Founded: {team.intFormedYear}</p>
                            <h3><FontAwesomeIcon icon={faFlag}/>Country: {team.strCountry}</h3>
                            <p><FontAwesomeIcon icon={faFutbol}/>Sports type: {team.strSport}</p>
                            <p><FontAwesomeIcon icon={faVenus}/>Gender: {team.strGender}</p>
                        </div>
                        <div className="half-width-two">
                            <img src={playerimg} alt="" />
                        </div>
                    </div>
            
            <div className="description">
                <p>{team.strDescriptionEN}</p>

                <p>{team.strDescriptionDE}</p>
            </div>
            <div className="social-link">
                    <p className="facebook"><FontAwesomeIcon icon={faFacebookSquare}/></p>
                    <p className="twitter"><FontAwesomeIcon icon={faTwitterSquare}/></p>
                    <p className="youtube"><FontAwesomeIcon icon={faYoutubeSquare}/></p>
            </div>
            
        </div>
    );
};

export default TeamDetail;