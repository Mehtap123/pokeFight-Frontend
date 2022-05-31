import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState();
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    // fetch("https://pokeapp728.herokuapp.com/api/pokemon/search?query=${searchWord}")
    fetch(
      "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      //   .then(
      //     fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
      //       .then((res) => res.json())
      //       .then((pokeResponse) => setPokePics(pokeResponse))
      //   )
      .catch((error) => console.log(error));
  }, [searchWord]);

  return (
    <>
      <div className="form-control" id="searchbar">
        <input
          id="inputtext"
          type="text"
          placeholder="search for pokemon"
          value={searchWord}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SearchBar;