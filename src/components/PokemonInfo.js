import { useParams, Link } from "react-router-dom";
import pokemon from "../img/Pokemon-Logo-Schrift.png";
import "../index.css";
import Bild from "../img/592678.jpg";

import React from "react";

const PokemonInfo = ({ data, pictures }) => {
  const { id } = useParams();
  // const navigate = useNavigate();
  // const handleClickBack = () => {
  //   navigate(-1);
  // };
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
          <div className="card stylecard ">
            <div className="stylebody">
              <h1 className="card-title poke-title">
                {findPokemon.name.english}
              </h1>
              {/* <div>
                <div className="logo-wrap"> */}
              {/* <div className="pokelogo">
                  <img
                    src={logo}
                    alt="Bild"
                    height={55}
                    width={55}
                    onClick={handleClick}
                    classNameName="App-logo"
                  />
                </div> */}
              {/* <h2 className="japanese">{findPokemon.name.japanese}</h2> */}
              {/* <div className="pokelogo2">
                  <img
                    src={logo2}
                    alt="Bild"
                    height={55}
                    width={55}
                    onClick={handleClick}
                    className="App-logo2"
                  />
                </div> */}
              {/* </div>
              </div> */}

              {/* <h6 className="card-title">
              HP:{findPokemon.base.HP} Attack: {findPokemon.base.Attack}
            </h6> */}
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                className="rounded mx-auto d-block img-detail"
                alt="..."
              ></img>
              <div className="stylebody">
                <h4 className="card-title">
                  1st Type: {findPokemon.type[0]} | 2nd Type:{" "}
                  {findPokemon.type[1]}
                </h4>
                <div className="buttonstyletwo">
                  <a
                    href="https://www.google.de"
                    className="btn btn-warning buttonstyle"
                  >
                    Select
                  </a>
                  <Link to="/pokemons" className="btn btn-warning buttonstyle">
                    Back
                  </Link>
                  <Link
                    to={`/pokemons/${findPokemon.id}/info`}
                    className="btn btn-warning"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonInfo;
