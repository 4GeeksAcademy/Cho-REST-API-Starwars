import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/planets.css";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  const isFavorite = (planet) => {
    return store.favorites && store.favorites.some((fav) => fav === planet);
  };

  return (
    <div>
      <h2>Planetas</h2>
      <div className="card-container">
        {store.planets &&
          store.planets.length > 0 &&
          store.planets.map((planet, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {planet.properties ? planet.properties.name : "No name"}
                </h5>
                <p className="card-text">
                  Climate:{" "}
                  {planet.properties ? planet.properties.climate : "N/A"}
                  <br />
                  Diameter:{" "}
                  {planet.properties ? planet.properties.diameter : "N/A"}
                  <br />
                  Population:{" "}
                  {planet.properties ? planet.properties.population : "N/A"}
                  <br />
                  Terrain:{" "}
                  {planet.properties ? planet.properties.terrain : "N/A"}
                </p>
                <button
                  onClick={() =>
                    isFavorite(planet)
                      ? actions.removeFavorite(planet)
                      : actions.addFavorite(planet)
                  }
                  style={{ color: isFavorite(planet) ? "red" : "grey" }}
                >
                  {isFavorite(planet) ? "♥" : "♡"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
