import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [query, setQuery] = useState('pikachu');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching the Pokémon data", error);
      }
    };

    fetchPokemon();
  }, [query]);

  return (
    <div className="App">
      <h1>Pokémon Search</h1>
      <Search onSearch={setQuery} />
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;
