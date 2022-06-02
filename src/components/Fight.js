import { useParams, useNavigate } from "react-router-dom";
import pokemon from "../img/Pokemon-Logo-Schrift.png";
import swal from 'sweetalert';
import axios from "axios";
import { useEffect, useState } from "react";


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
const Opponent = data[getRandomPokemon()]

 //find new opponent
const handleNewOpponent = (event) => {
  window.location.reload()
}
//fetch leaderboard
const [oldHighscore, setOldHighscore] = useState([]);

useEffect(() => {
    axios.get("https://pokeapp728.herokuapp.com/api/game/leaderboard")
    .then(res =>{
    setOldHighscore(res.data.pokemons)
    })
    .catch((error) => console.log(error));
    }, []);
console.log(oldHighscore);

//Check if Pokemon is already in Leaderboard:
const pokemonInLeaderboard = oldHighscore.find(pokemon => pokemon.name === findPokemon.name.english);

console.log(pokemonInLeaderboard)
let InLeaderboardId = []
if (pokemonInLeaderboard){InLeaderboardId = pokemonInLeaderboard._id}
console.log(InLeaderboardId)

//fighting logic:
const enduranceYours = findPokemon.base.HP*findPokemon.base.Defense/Opponent.base.Attack
const enduranceOpponent = Opponent.base.HP*Opponent.base.Defense/findPokemon.base.Attack

//Declare winner and put/post into database after clicking button:
const handleFight = (event) => {
if (enduranceYours > enduranceOpponent){
  swal("You won!");
  const newHighscore = pokemonInLeaderboard.highscore+1
  const newEntry = {
    name: findPokemon.name.english,
    highscore: newHighscore,
  };  
  if (pokemonInLeaderboard){
    axios.put(
    `https://pokeapp728.herokuapp.com/api/game/leaderboard/${InLeaderboardId}`,
    newEntry)
    } else {
    axios.post(
    "https://pokeapp728.herokuapp.com/api/game/save",
    newEntry)
    }
}
else if (enduranceYours < enduranceOpponent) {swal("You lost!")}}


  return (
    <>
      <div className="pokemonschrift-wrap">
        <div className="pokemonschrift">
          <img src={pokemon} alt="Bild" height={225} />
        </div>

        {findPokemon && (
        <>
          <div className="card stylecard">
            <div className="card-body stylebody">
              <h1 className="card-title poke-title">
                {findPokemon.name.english}                
              </h1>
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
                <a
                  href="https://www.google.de"
                  className="btn btn-warning buttonstyle"
                >
                  Select
                </a>
                <button onClick={handleClick} className="btn btn-warning">
                  Back
                </button>
              </div>
            </div>
          </div>


          <div className="card stylecard">
          <div className="card-body stylebody">
            <h1 className="card-title poke-title">
              A wild {Opponent.name.english} appears!               
            </h1>
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

            <h6 className="card-title"> </h6>
            <div className="buttonstyletwo">
              <a
                href="https://www.google.de"
                className="btn btn-warning buttonstyle"
              >
                Select
              </a>
              <button onClick={handleClick} className="btn btn-warning">
                Back
              </button>
              <button onClick={handleFight} className="btn btn-warning">
                Fight
              </button>
              <button onClick={handleNewOpponent} className="btn btn-warning">
                new opponent
              </button>
            </div>
          </div>
        </div>
        </>

        )}
      </div>
    </>
  );
};

export default Fight; 
