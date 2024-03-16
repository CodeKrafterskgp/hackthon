import './leaderboard.css';
import imgData from '../../assets/badge/badge';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Leader = () => {
  const [leaders, setLeaders] = useState([{}]);
  useEffect(() => {
    axios
      .get('/api/score')
      .then((res) => {
        setLeaders(res.data);
      })
      .catch((err) => {
        console.log('Error::', err);
      });
  }, []);
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      {leaders.map((person, index) => (
        <Cards
          name={person.name}
          score={person.score}
          img={imgData[index]}
          key={index}
        />
      ))}
    </div>
  );
};

const Cards = (props) => (
  <div className="card">
    <img className="rank-image" src={props.img} alt="1st" />
    <div>
      <h3>{props.name}</h3>
    </div>
    <p>Score: {props.score}</p>
  </div>
);

export default Leader;
