import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Landingpage from "./components/Landingpage";
import Pokemon from "./components/Pokemon";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const pokemon = data;

  console.log(pokemon);
  console.log(data);
  return (
    <>
      <h2>hello</h2>
      {pokemon ? (
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/pokemon" element={<Pokemon data={pokemon} />} />
        </Routes>
      ) : (
        "Loading...."
      )}
    </>
  );
}

export default App;
