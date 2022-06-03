import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [highscore, setHighscore] = useState([]);

  useEffect(() => {
    const res = fetch("https://pokeapp728.herokuapp.com/api/game/leaderboard")
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
      <h1>Highscore</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Highscore</th>
          </tr>
        </thead>
        {showHighscore &&
          showHighscore.map((score, index) => (
            <tbody>
              <tr>
                <th scope="row" key={index}>{index +1}</th>
                <td>{score.name}</td>
                <td>{score.highscore}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </>
  );
};

export default Leaderboard;
