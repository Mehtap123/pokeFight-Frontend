import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Pokemon = ({ data, pictures }) => {
  console.log(data);
  console.log(pictures);
  return (
    <>
      <h1>Pokemon</h1>

      {data.map((item, index) => (
        <div className="card fff" style={{ width: "18rem" }} key={index}>
          <div className="card-body">
            <h4 className="card-title">{item.name.english}</h4>

            <a href="#" className="btn btn-warning buttonstyle">
              Select
            </a>
            <Link to={`${item.id}`} className="btn btn-warning buttonstyle">
              More Info
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pokemon;
