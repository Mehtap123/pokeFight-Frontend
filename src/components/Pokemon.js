import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Pokemon = ({ data, pictures }) => {
  console.log(data);
  console.log(pictures);
  return (
    <>
      <h1>Pokemon</h1>
      

      
      {data.map((item) => (

        <div class="card fff" style={{ width: "18rem" }}>
        
        <div class="card-body">
          <h4 class="card-title">{item.name.english}</h4>
          
        
          <a href="#" class="btn btn-warning buttonstyle">Select</a>
          <a href="#" class="btn btn-warning">More Info</a>
        </div>
      </div>
      ))}
      
    </>
  );
};

export default Pokemon;
