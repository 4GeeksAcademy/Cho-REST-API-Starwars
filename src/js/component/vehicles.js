import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/vehicles.css";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);

  const isFavorite = (vehicle) => {
    return store.favorites && store.favorites.some((fav) => fav === vehicle);
  };

  return (
    <div>
      <h1>Vehiculos</h1>
      <div className="card-container">
        {store.vehicles &&
          store.vehicles.length > 0 &&
          store.vehicles.map((vehicle, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {vehicle.properties ? vehicle.properties.name : "No name"}
                </h5>
                <p className="card-text">
                  Model: {vehicle.properties ? vehicle.properties.model : "N/A"}
                  <br />
                  Manufacturer:{" "}
                  {vehicle.properties ? vehicle.properties.manufacturer : "N/A"}
                  <br />
                  Cost in Credits:{" "}
                  {vehicle.properties
                    ? vehicle.properties.cost_in_credits
                    : "N/A"}
                  <br />
                  Length:{" "}
                  {vehicle.properties ? vehicle.properties.length : "N/A"}
                </p>
                <button
                  onClick={() =>
                    isFavorite(vehicle)
                      ? actions.removeFavorite(vehicle)
                      : actions.addFavorite(vehicle)
                  }
                  style={{ color: isFavorite(vehicle) ? "red" : "grey" }}
                >
                  {isFavorite(vehicle) ? "♥" : "♡"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
