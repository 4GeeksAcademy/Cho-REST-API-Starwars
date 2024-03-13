import React from "react";
import "../../styles/home.css";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Star wars data</h1>
    <People />
    <Planets />
    <Vehicles />
  </div>
);
