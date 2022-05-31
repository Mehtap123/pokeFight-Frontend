import { Link } from "react-router-dom";
import pokemon from "../img/Pokemon-Logo-Schrift.png";
import pikachu from "../img/pikachu.png";
import SearchBar from "./SearchBar";

const Pokemon = ({ data, pictures }) => {
  console.log(data);
  console.log(pictures);
  return (
    <>
      <div className="pokemonschrift-wrap ">
        <Link to="/">
          <img src={pokemon} alt="Bild" className="pokemonschrift" />
        </Link>
      </div>
      <SearchBar />

      {data.map((item, index) => (
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
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pokemon;
