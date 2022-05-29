import { useParams, useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import logo2 from "../logo2.svg";
import "../index.css";

import React from "react";

const PokemonInfo = ({ data, pictures }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  console.log(data);
  console.log(pictures);

  const findPokemon = data.find((poke) => id == poke.id);
  console.log(findPokemon);

  return (
    <>
      {findPokemon && (
        <div class="card stylecard">
          <div class="stylebody">
            <h1 class="card-title">{findPokemon.name.english}</h1>
            <div>
              <div class="logo-wrap">
                <div class="pokelogo">
                  <img
                    src={logo}
                    alt="Bild"
                    height={55}
                    width={55}
                    onClick={handleClick}
                    className="App-logo"
                  />
                </div>
                <h2 class="japanese">{findPokemon.name.japanese}</h2>
                <div class="pokelogo2">
                  <img
                    src={logo2}
                    alt="Bild"
                    height={55}
                    width={55}
                    onClick={handleClick}
                    className="App-logo2"
                  />
                </div>
              </div>
            </div>

            {/* <h6 class="card-title">
              HP:{findPokemon.base.HP} Attack: {findPokemon.base.Attack}
            </h6> */}
            <div class="stylebody"></div>
            <h4 class="card-title">
              1st Type: {findPokemon.type[0]} | 2nd Type:{findPokemon.type[1]}
            </h4>
            <div class="buttonstyletwo">
              <a href="#" class="btn btn-warning buttonstyle">
                Select
              </a>
              <button
                onClick={handleClick}
                class="btn btn-secondary buttonstyle"
              >
                Back
              </button>
              <button onClick={handleClick} class="btn btn-warning">
                Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonInfo;
