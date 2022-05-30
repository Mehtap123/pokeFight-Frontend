import logo from "../logo.svg";
import pokemon from "../img/Pokemon-Logo-Schrift.png";
import "../index.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
  console.log("ich wurde geklickt");

  return (
    <div className="App">
      <div className="pokemon">
        <img src={pokemon} alt="pokemon" width={955} />
      </div>
      <div className="ball">
        <Link to="pokemons">
          <img
            src={logo}
            alt="Bild"
            height={555}
            width={555}
            className="App-logo"
          />
        </Link>
        ;
      </div>
    </div>
  );
};

export default Landingpage;
