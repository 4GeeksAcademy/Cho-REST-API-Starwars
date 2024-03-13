import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context); // Get the store from the context
  const [showFavorites, setShowFavorites] = useState(false); // State to control the visibility of the favorites list

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          Favorites ({store.favorites ? store.favorites.length : 0})
        </button>
        {showFavorites && (
          <div className="dropdown-menu show">
            {store.favorites &&
              store.favorites.length > 0 &&
              store.favorites.map((favorite, index) => (
                <a className="dropdown-item" key={index}>
                  {favorite.properties ? favorite.properties.name : "No name"}
                </a>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};
