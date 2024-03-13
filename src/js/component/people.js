import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/people.css";

export const People = () => {
  const { store, actions } = useContext(Context);

  const isFavorite = (person) => {
    return store.favorites && store.favorites.some((fav) => fav === person);
  };

  return (
    <div>
      <h1>Characters</h1>
      <div className="card-container">
        {store.people &&
          store.people.length > 0 &&
          store.people.map((person, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {person.properties ? person.properties.name : "No name"}
                </h5>
                <p className="card-text">
                  Birth Year:{" "}
                  {person.properties ? person.properties.birth_year : "N/A"}
                  <br />
                  Eye Color:{" "}
                  {person.properties ? person.properties.eye_color : "N/A"}
                  <br />
                  Gender: {person.properties ? person.properties.gender : "N/A"}
                  <br />
                  Hair Color:{" "}
                  {person.properties ? person.properties.hair_color : "N/A"}
                  <br />
                  Height: {person.properties ? person.properties.height : "N/A"}
                </p>
                <button
                  onClick={() =>
                    isFavorite(person)
                      ? actions.removeFavorite(person)
                      : actions.addFavorite(person)
                  }
                  style={{ color: isFavorite(person) ? "red" : "grey" }}
                >
                  {isFavorite(person) ? "♥" : "♡"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
