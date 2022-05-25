import logo from "../logo.svg";
import pokemon from "../img/Pokemon-Logo-Schrift.png";
import "../index.css";

const Landingpage = () => {
  return (
    <div>
      <div className="pokemon">
        <img src={pokemon} alt="pokemon" width={955} />
      </div>
      <div className="ball">
        <button type="button">
          <img
            src={logo}
            alt="Bild"
            height={555}
            width={555}
            className="App-logo"
          />
        </button>
      </div>
    </div>
  );
};

export default Landingpage;
