import React from "react";
import { PokemonLink } from "../../types";

interface PokemonListProps {
  pokemonsList: PokemonLink[];
}
const PokemonList = ({ pokemonsList }: PokemonListProps) => {
  return (
    <ul>
      {pokemonsList.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
