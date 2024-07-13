import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonCard;
