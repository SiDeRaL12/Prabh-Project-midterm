import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Description = () => {
  const [pokemondetail, setPokemondetails] = useState(null);  
  
  const { name } = useParams();  

  const getPokemonData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    
    setPokemondetails({
      name: data.name,
      image: data.sprites.front_default, // Pokémon image
      abilities: data.abilities.map(ability => ability.ability.name),
    });
  };

  useEffect(() => {
    getPokemonData(); 
  }, [name]); 

  return (
    <div>
    {pokemondetail && (
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemondetail.name}</h1>
        <img src={pokemondetail.image} alt={pokemondetail.name}  />
        <p>Abilities: {pokemondetail.abilities.join(', ')}</p>
      </div>
    )}
  </div>
);
};

export default Description;
