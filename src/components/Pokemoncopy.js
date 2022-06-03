import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import pokemon from "../img/Pokemon-Logo-Schrift.png";

const Pokemoncopy = ({}) => {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState();

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
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

  // const [data, setData] = useState([]);
  // const [searchWord, setSearchWord] = useState();

  // const handleChange = (e) => {
  //   setSearchWord(e.target.value);
  // };

  useEffect(() => {
    fetch(
      `https://pokeapp728.herokuapp.com/api/pokemon/search?query=${searchWord}`
    )
      // fetch(
      //   `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex/search?query=${searchWord}`

      .then((res) => res.json())
      .then((data) => setData(data.item))
      .catch((error) => console.log(error));
  }, [searchWord]);

  return (
    <>
      <div className="pokemonschrift-wrap ">
        <Link to="/">
          <img src={pokemon} alt="Bild" className="pokemonschrift" />
        </Link>
      </div>

      <div className="form-control" id="searchbar">
        <input
          id="inputtext"
          type="text"
          placeholder="search for pokemon"
          value={searchWord}
          onChange={handleChange}
        />
      </div>

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
              <Link
                to={`/pokemons/${item.id}/fight`}
                className="btn btn-warning buttonstyle"
              >
                Select
              </Link>
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

export default Pokemoncopy;
