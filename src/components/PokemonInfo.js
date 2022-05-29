import { useParams, useNavigate } from "react-router-dom";

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
          <div class="card-body stylebody">
            <h1 class="card-title">{findPokemon.name.english}</h1>
            <div class="card">
              <h2 class="card-body japanese">{findPokemon.name.japanese}</h2>
            </div>

            {/* <h6 class="card-title">
              HP:{findPokemon.base.HP} Attack: {findPokemon.base.Attack}
            </h6> */}

            <h6 class="card-title">
              1st Type: {findPokemon.type[0]} | 2nd Type:{findPokemon.type[1]}{" "}
            </h6>
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
