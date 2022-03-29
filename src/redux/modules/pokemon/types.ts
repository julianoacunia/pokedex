import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface PokemonsState {
  pokemons: Pokemon[];
  error?: Error;
  isFetching: boolean;
  selectedIndex: number;
  filterPokemon: Pokemon[];
  pokemonDetail?: PokemonInfo;
  features?: PokemonFeatures;
}

export interface Pokemon {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number,
  abilities: Abilities[],
  forms: Forms[],
  game_indices: GameIndices[],
  held_items: HeldItems[],
  location_area_encounters: string,
  moves: Moves[],
  species: {
    name: string,
    url: string
  },
  sprites: Sprites,
  stats: Stats[],
  types: Types[],
  past_types: PastTypes[]
}

export interface PokemonInfo {
  id: number,
  name: string,
  is_main_series: boolean,
  generation: {
    name: string,
    url: string
  },
  names: [
    {
      name: string,
      language: {
        name: string,
        url: string
      }
    }
  ],
  effect_entries: [
    {
      effect: string,
      short_effect: string,
      language: {
        name: string,
        url: string
      }
    }
  ],
  effect_changes: [
    {
      version_group: {
        name: string,
        url: string
      },
      effect_entries: [
        {
          effect: string,
          language: {
            name: string,
            url: string
          }
        }
      ]
    }
  ],
  flavor_text_entries: [
    {
      flavor_text: string,
      language: {
        name: string,
        url: string,
      },
      version_group: {
        name: string
        url: string
      }
    }
  ],
  pokemon: [
    {
      is_hidden: boolean,
      slot: number,
      pokemon: {
        name: string,
        url: string
      }
    }
  ]
}

export interface PokemonFeatures {
  id: number,
  gene_modulo: number,
  possible_values: number[],
  highest_stat: {
    name: string,
    url: string
  },
  descriptions: [
    {
      description: string,
      language: {
        name: string,
        url: string
      }
    }
  ]
}

interface Abilities {
  is_hidden: boolean,
  slot: number,
  ability: {
    name: string,
    url: string
  }
}

interface Forms {
  name: string,
  url: string
}

interface GameIndices {
  game_index: number,
  version: {
    name: string,
    url: string
  }
}

interface HeldItems {
  item: {
    name: string
    url: string
  },
  version_details: [
    {
      rarity: number,
      version: {
        name: string,
        url: string
      }
    }
  ]
}

interface Moves {
  move: {
    name: string,
    url: string
  },
  version_group_details: [
    {
      level_learned_at: 1,
      version_group: {
        name: string,
        url: string
      },
      move_learn_method: {
        name: string,
        url: string
      }
    }
  ]
}

interface Sprites {
  back_default: string
  back_female: null,
  back_shiny: string,
  back_shiny_female: null,
  front_default: string,
  front_female: null,
  front_shiny: string,
  front_shiny_female: null,
  other: {
    dream_world: {
      front_default: string,
      front_female: null
    },
    home: {
      front_default: string,
      front_female: null,
      front_shiny: string,
      front_shiny_female: null
    },
  },
}

interface Stats {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string
  }
}

export interface Types {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

interface PastTypes {
  generation: {
    name: string,
    url: string
  },
  types: [
    {
      slot: number,
      type: {
        name: string,
        url: string
      }
    }
  ]
}

export interface Error {
  message: string;
  statusCode: number | string;
}

export type ActionsType = ActionType<typeof actions>;

export enum PokemonsActionsConst {
  GET_POKEMONS_FETCHING = 'GET_POKEMONS_FETCHING',
  GET_POKEMONS_FULFILLED = 'GET_POKEMONS_FULFILLED',
  GET_POKEMONS_REJECTED = 'GET_POKEMONS_REJECTED',

  GET_FEATURES_FETCHING = 'GET_FEATURES_FETCHING',
  GET_FEATURES_FULFILLED = 'GET_FEATURES_FULFILLED',
  GET_FEATURES_REJECTED = 'GET_FEATURES_REJECTED',

  GET_POKEMON_INFO_FETCHING = 'GET_POKEMON_INFO_FETCHING',
  GET_POKEMON_INFO_FULFILLED = 'GET_POKEMON_INFO_FULFILLED',
  GET_POKEMON_INFO_REJECTED = 'GET_POKEMON_INFO_REJECTED',

  FILTER_POKEMONS = 'FILTER_POKEMONS',
}
