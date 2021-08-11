import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="recipeTile"
        onClick={() => window.open(recipe["recipe"]["url"])}
      >
        <img
          className="recipeTile__img"
          alt="img"
          src={recipe["recipe"]["image"]}
        />
        <p className="recipeTile__name" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}
