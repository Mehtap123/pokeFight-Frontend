import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import pokemon from "../img/Pokemon-Logo-Schrift.png";
import pikachu from "../img/pikachu.png";
import SearchBar from "./SearchBar";

const Pokemon = ({ data }) => {
  const jsondata = data;

  //console.log(jsondata[id]);

  const id = jsondata.id;

  const [pokePics, setPokePics] = useState([]);

  const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="pokemonschrift-wrap ">
        <Link to="/">
          <img src={pokemon} alt="Bild" className="pokemonschrift" />
        </Link>
      </div>
      <SearchBar />
      {/* {data.map((item, index) => (
        <div className="card poke-card" style={{ width: "18rem" }} key={index}>
          <div className="card-body">
            <h4 className="card-title poke-title">{item.name.english}</h4>
            <div className="avatar">
              <img src={pikachu} alt="pikachu" className="fluid" width={50} />
            </div>
            <div className="btn-poke">
              <a href="https://www.google.de" className="btn  buttonstyle ">
                Select
              </a>
              <Link to={`${item.id}`} className="btn buttonstyle ">
                Info
              </Link> */}
      {data.map((item, index) => (
        <div className="card poke-card" style={{ width: "18rem" }} key={index}>
          <div className="card-body">
            <h4 className="card-title poke-title">{item.name.english}</h4>
            <div className="avatar">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt="pokemon"
                className="fluid"
                width={150}
              />
            </div>
            <div className="btn-poke">
              <a href="https://www.google.de" className="btn  buttonstyle ">
                Select
              </a>
              <Link to={`${item.id}`} className="btn buttonstyle ">
                Info
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pokemon;
