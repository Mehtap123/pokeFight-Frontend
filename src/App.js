import './App.css';
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json")
      .then((res) => res.json())
      .then((data)=> setData(data))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return ;
}

export default App;
