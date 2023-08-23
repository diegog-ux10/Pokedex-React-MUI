import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CardPokemon, Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";

export const SearchPage = () => {
  const location = useLocation();

  const { globalPokemons, loading } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.data.name.includes(location.state.toLowerCase())
  );

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <p className="p-search">
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
