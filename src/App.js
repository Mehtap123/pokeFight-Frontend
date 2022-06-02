import React from "react";
import { useEffect, useState } from "react";
import Landingpage from "./components/Landingpage";
import Pokemon from "./components/Pokemon";
import { Routes, Route } from "react-router-dom";
import PokemonInfo from "./components/PokemonInfo";
import PokemonInfoDetail from "./components/PokemonInfoDetail";
import Fight from "./components/Fight";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [data, setData] = useState([]);

  // const [searchWord, setSearchWord] = useState();
  // const handleChange = (e) => {
  //   setSearchWord(e.target.value);
  // };

  useEffect(() => {
    // fetch("https://pokeapp728.herokuapp.com/api/pokemon/search?query=${searchWord}")
    fetch(
      "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* <div id="searchbar">
        <input
          id="inputtext"
          type="text"
          placeholder="search for pokemon"
          value={searchWord}
          onChange={handleChange}
        />
      </div> */}

      {data ? (
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="pokemons" element={<Pokemon data={data} />} />
          <Route path="pokemons/:id" element={<PokemonInfo data={data} />} />
          <Route
            path="pokemons/:id/info"
            element={<PokemonInfoDetail data={data} />}
          />
          <Route path="pokemons/:id/fight" element={<Fight data={data} />} />
        </Routes>
      ) : (
        "Loading...."
      )}
    </>
  );
};

export default App;
