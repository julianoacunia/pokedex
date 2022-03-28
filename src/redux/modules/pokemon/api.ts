import axios from 'axios';

export const getPokemons = () => axios.get('https://pokeapi.co/api/v2/pokemon');
export const getPokemonInfo = (pokemonId: string) => axios.get(`https://pokeapi.co/api/v2/ability/${pokemonId}`);
export const getFeatures = (pokemonId: string) => axios.get(`https://pokeapi.co/api/v2/characteristic/${pokemonId}`)