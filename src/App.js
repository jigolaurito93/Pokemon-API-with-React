import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ButtonDisplay from "./views/ButtonDisplay";
import RacerDisplay from "./views/RacerDisplay";
import Main from "./components/Main";
import Axios from "axios";
import { useState } from "react";
import PokeInfo from "./components/PokeInfo";

function App() {
  let name = "Jose";
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    height: "",
    weight: "",
    img: "",
    type:"",
    name:""
  });
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        // console.log(response)
        setPokemon({
          name: pokemonName,
          height: response.data.height,
          weight: response.data.weight,
          img: response.data.sprites.front_default,
          species: response.data.species.name,
          type: response.data.types[0].type.name
        });
        setPokemonChosen(true);
      }
    );
  };
  return (
    <div className="App">
      <Navbar username={name} city={"Chicago"} />
      <div className="container">
        <Routes>
          <Route path="/" element={<ButtonDisplay name={name} />} />
          <Route path="/racers" element={<RacerDisplay />} />
          <Route path="/racers" element={<RacerDisplay />} />
        </Routes>
      </div>
      <div className="Container d-flex justify-content-center my-5   ">
        <h1 className="bg-success w-100 text-center p-5">Pokemon Stats</h1>
      </div>
      <div className="row">
        <div className="col-3" />
        <div className="col-4">
          <input
            type="text"
            onChange={(event) => {
              setPokemonName(event.target.value);
            }}
            name="pokemon"
            className="form-control mx-4"
            placeholder="Enter Pokemon Name"
          />
        </div>
        <div className="col-2">
          <input
            onClick={searchPokemon}
            type="submit"
            value="I Choose You"
            className="btn btn-primary"
          />
        </div>
        <div className="DisplaySection text-center my-4">
          {!pokemonChosen ? (
            <h1>Please choose a Pokemon</h1>
          ) : (
            <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img}></img>
            <h3 className="m-4">Height: {pokemon.height} </h3>
            <h3 className="m-4">Weight: {pokemon.weight} </h3>
            <h3 className="m-4">Species: {pokemon.species} </h3>
            <h3 className="m-4">Type: {pokemon.type}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
