const url = "https://pokeapi.co/api/v2/pokemon";


export const getPokemonsList = async () => {
  return fetch(url).then((response) => response.json());
};

export const getNextPokemons = async (nextUrl: string) => {
  return fetch(nextUrl).then((response) => response.json());
};
