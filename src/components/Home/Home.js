import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import image from '../../images/trophy.jpg';

import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    const first12 = teams.slice(0,12); 
    console.log(first12);
    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
         fetch(url)
        .then(res => res.json())
        .then(teams =>{
            setTeams(teams.teams)
        })
    }, [])
    return (
        <div className="home">
            <img style={{width: '1600px', height: '400px'}}src={image} alt="" />
            <h1>Sports Squad Team</h1>
        
            {
                first12.map(team => <Team team={team}></Team>)
            }
        </div>
    );
};

export default Home;