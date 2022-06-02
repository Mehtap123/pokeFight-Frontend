import { useParams, useNavigate } from "react-router-dom";
import pokemon from "../img/Pokemon-Logo-Schrift.png";
import swal from "sweetalert";
import logo from "../logo.svg";

import React from "react";

const Fight = ({ data }) => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-2);
  };

  const findPokemon = data.find((poke) => id == poke.id);
  console.log(findPokemon);

  //find opponent:

  function getRandomPokemon() {
    return Math.floor(Math.random() * 809);
  }
  console.log(getRandomPokemon());
  const Opponent = data[getRandomPokemon()];

  // {data[getRandomPokemon()].name.english}
  const handleNewOpponent = (event) => {
    window.location.reload();
  };

  //fighting logic:

  const enduranceYours =
    (findPokemon.base.HP * findPokemon.base.Defense) / Opponent.base.Attack;
  const enduranceOpponent =
    (Opponent.base.HP * Opponent.base.Defense) / findPokemon.base.Attack;

  const handleFight = (event) => {
    if (enduranceYours > enduranceOpponent) {
      swal("WINNER!");
    } else if (enduranceYours < enduranceOpponent) {
      swal("You lost!");
    }
  };

  // pokemon yours
  //(hp*defense)/opponentAttack = enduranceYours

  //pokemon opponent
  //(hp<opponent*defenseOpponent)/attack = enduranceOpponent

  // if (enduranceYours > enduranceOpponent){console.log("Your pokemon won!"")}
  // else if (enduranceYours = enduranceOpponent){console.log("It's a tie!")}
  // else {console.log("You lost!")}

  return (
    <>
      <div className="pokemonschrift-wrap">
        <div className="pokemonschrift">
          <img src={pokemon} alt="Bild" height={225} />
        </div>
      </div>

      {findPokemon && (
        <>
          <div className="fight-wrap">
            <div className="card stylecard">
              <div className="card-body stylebody-fight">
                <h1 className="card-title poke-title">
                  {findPokemon.name.english}
                </h1>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  className="rounded mx-auto d-block img-detail"
                  alt="..."
                ></img>
                {/* <div className="card">
              <h2 className="card-body japanese">{findPokemon.name.japanese}</h2>
            </div> */}

                <h6 className="card-title">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Attack</th>
                        <th scope="col">Defense</th>
                        <th scope="col">Speed</th>
                        <th scope="col">HP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{findPokemon.base.Attack}</td>
                        <td>{findPokemon.base.Defense} </td>
                        <td>{findPokemon.base.Speed}</td>
                        <td>{findPokemon.base.HP}</td>
                      </tr>
                    </tbody>
                  </table>
                </h6>

                <h6 className="card-title"> </h6>
                <div className="buttonstyletwo">
                  {/* <a
                  href="https://www.google.de"
                  className="btn btn-warning buttonstyle"
                >
                  Select
                </a> */}
                  <button onClick={handleClick} className="btn btn-warning">
                    Back
                  </button>
                </div>
              </div>
            </div>

            <div className="fight">
              <button
                onClick={handleFight}
                className="btn btn-secondary
                 buttonstyle btn-fight"
              >
                Fight
              </button>
            </div>

            <div className="card stylecard">
              <div className="card-body stylebody">
                <h1 className="card-title poke-title">
                  {Opponent.name.english}
                </h1>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Opponent.id}.png`}
                  className="rounded mx-auto d-block img-detail"
                  alt="..."
                ></img>
                {/* <div className="card">
            <h2 className="card-body japanese">{findPokemon.name.japanese}</h2>
          </div> */}

                <h6 className="card-title">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Attack</th>
                        <th scope="col">Defense</th>
                        <th scope="col">Speed</th>
                        <th scope="col">HP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{Opponent.base.Attack}</td>
                        <td>{Opponent.base.Defense} </td>
                        <td>{Opponent.base.Speed}</td>
                        <td>{Opponent.base.HP}</td>
                      </tr>
                    </tbody>
                  </table>
                </h6>
                <button
                  onClick={handleNewOpponent}
                  className="btn btn-warning buttonstyle"
                >
                  new opponent
                </button>
                <h6 className="card-title"> </h6>
                <div className="buttonstyletwo">
                  A wild {Opponent.name.english} appears!
                  {/* <a
                href="https://www.google.de"
                className="btn btn-warning buttonstyle"
              >
                Select
              </a>
              <button onClick={handleClick} className="btn btn-warning">
                Back
              </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Fight;
