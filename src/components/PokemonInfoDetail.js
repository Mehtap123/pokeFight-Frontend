import { useParams, useNavigate } from "react-router-dom";

import React from "react";

const PokemonInfo = ({ data, pictures }) => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-2);
  };
  console.log(data);
  console.log(pictures);

  const findPokemon = data.find((poke) => id == poke.id);
  console.log(findPokemon);

  return (
    <div>
      {findPokemon && (
        <div className="card stylecard">
          <div className="card-body stylebody">
            <h1 className="card-title poke-title">
              {findPokemon.name.english}
            </h1>
            {/* <div className="card">
              <h2 className="card-body japanese">{findPokemon.name.japanese}</h2>
            </div> */}

            <h6 className="card-title">
              HP:{findPokemon.base.HP} Attack: {findPokemon.base.Attack}
            </h6>

            <h6 className="card-title">
              Defense: {findPokemon.base.Defense} Speed:{findPokemon.base.Speed}{" "}
            </h6>
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
      )}
    </div>
  );
};

export default PokemonInfo;
