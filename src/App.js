import React from "react";
import { useEffect, useState } from "react";
import Landingpage from "./components/Landingpage";
import Pokemon from "./components/Pokemon";
import { Routes, Route } from "react-router-dom";
import PokemonInfo from "./components/PokemonInfo";

const App = () => {
  const [data, setData] = useState([]);
  const [pokePics, setPokePics] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
          .then((res) => res.json())
          .then((pokeResponse) => setPokePics(pokeResponse))
      )
      .catch((error) => console.log(error));
  }, []);

  const pictures = pokePics.results;

  return (
    <>
      {pictures ? (
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            path="pokemons"
            element={<Pokemon data={data} pictures={pictures} />}
          />
          <Route
            path=":id"
            element={<PokemonInfo data={data} pictures={pictures} />}
          />
          <Route
            path=":id/:info"
            element={<PokemonInfo data={data} pictures={pictures} />}
          />
        </Routes>
      ) : (
        "Loading...."
      )}
    </>
  );
};

export default App;
