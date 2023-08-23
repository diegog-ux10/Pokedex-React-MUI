import { instance } from "./base.api";

const endPoint = "pokemon";

export const pokemons = {
  getAll: function ( limit = 50, offset = 0 ) {
    return instance.get(endPoint, { params: {limit, offset}});
  },
  getGlobal: function(limit = 1000, offset = 0) {
    return instance.get(endPoint, { params: {limit, offset}} );
  },
  getPokemon: function(pokemon) {
    return instance.get(pokemon.url)
  },
  getById: function (id) {
    return instance.get(`${endPoint}/${id.id}`);
  },
};