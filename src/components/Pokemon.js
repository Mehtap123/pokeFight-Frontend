import { Link } from "react-router-dom";
import pokemon from "../img/Pokemon-Logo-Schrift.png";

const Pokemon = ({ data, pictures }) => {
  console.log(data);
  console.log(pictures);
  return (
    <div className="pokemonschrift-wrap">
      <div className="pokemonschrift">
        <img src={pokemon} alt="Bild" height={85} />
      </div>

      {data.map((item, index) => (
        <div className="card fff" style={{ width: "18rem" }} key={index}>
          <div className="card-body">
            <h4 className="card-title">{item.name.english}</h4>
            <div className="btn-poke">
              <a
                href="https://www.google.de"
                className="btn btn-warning buttonstyle "
              >
                Select
              </a>
              <Link to={`${item.id}`} className="btn btn-warning buttonstyle ">
                More Info
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
