import { useEffect, useState } from "react";
import pokemon from "../img/Pokemon-Logo-Schrift.png";
import "../index.css";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [highscore, setHighscore] = useState([]);

  useEffect(() => {
    fetch("https://pokeapp728.herokuapp.com/api/game/leaderboard")
      .then((data) => data.json())
      .then((data) => setHighscore(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(highscore);

  const showHighscore = highscore.pokemons;
  console.log(showHighscore);
  if (showHighscore) {
    showHighscore.sort(function (a, b) {
      return b.highscore - a.highscore;
    });
  }

  console.log(showHighscore);

  return (
    <>
      <div className="pokemonschrift-wrap">
        <div className="pokemonschrift">
        <Link to="/">
          <img src={pokemon} alt="Bild" className="pokemonschrift" />
        </Link>
        </div>
      </div>
      <div className="highscore">
        <h1 className="card-title poke-title">Highscore</h1>
        <Link
          to="/pokemons"
          className="btn btn-secondary buttonstyle leaderboard-btn"
        >
          Back
        </Link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Highscore</th>
            </tr>
          </thead>
          <tbody>
            {showHighscore &&
              showHighscore.map((score, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{score.name}</td>
                  <td>{score.highscore}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
