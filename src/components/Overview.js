import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Landingpage from "./Landingpage";
import Pokemon from "./Pokemon";
import { Card, Button } from "react-bootstrap";

function Overview() {
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
  console.log(pokemon[0]);
  //console.log(data);
  return (
    <>
      {pokemon.map(pokemon =>       
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
           </Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
        </Card>
      )}


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

export default Overview;
