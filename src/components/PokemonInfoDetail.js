import { useParams, useNavigate } from "react-router-dom";
import pokemon from "../img/Pokemon-Logo-Schrift.png";

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
    <>
      <div className="pokemonschrift-wrap">
        <div className="pokemonschrift">
          <img src={pokemon} alt="Bild" height={225} />
        </div>
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
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">HP</th>
                      <th scope="col">Attack</th>
                      <th scope="col">Defense</th>
                      <th scope="col">Speed</th>
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
        )}
      </div>
    </>
  );
};

export default PokemonInfo;
