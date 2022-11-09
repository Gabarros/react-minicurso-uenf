import React, { useState } from "react";

import { getPokemonsList, getNextPokemons } from "../../services/api";
import { PokemonLink } from "../../types";

import PokemonList from "../../components/PokemonsList/PokemonsList";

import "./styles.css";

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState<PokemonLink[]>();
  const [nextUrl, setNextUrl] = useState<string>("");

  const loadPokemonData = () => {
    getPokemonsList().then((data) => {
      const { results, next } = data;

      setPokemonsList(results);
      setNextUrl(next);
    });
  };

  const cleanPokemonsList = () => setPokemonsList([]);

  const loadNextPokemonData = () => {
    getNextPokemons(nextUrl).then((data) => {
      const { results, next } = data;

      setPokemonsList(results);
      setNextUrl(next);
    });
  };

  return (
    <div className="main-page">
      <div>
        <button
          onClick={() => loadPokemonData()}
          data-testid="load-button"
          className="load-button"
        >
          Carregar Lista de Pokemons
        </button>

        <button
          onClick={() => cleanPokemonsList()}
          className="clean-list-button"
          data-testid="clean-list-button"
        >
          Limpar
        </button>
      </div>

      {pokemonsList && <PokemonList pokemonsList={pokemonsList} />}

      {pokemonsList && (
        <button onClick={() => loadNextPokemonData()} data-testid="more-button">
          Mais Pokemons
        </button>
      )}
    </div>
  );
};

export default Home;
