import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const Pokemones = () => {
        const [pokemonArray, setPokemonArray] = useState([]);

        const getPokemonData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();

            let updatedPokemonArray = [];

            for (const pokemon of data.results) {
                const details = await getPokemonDataWithInfo(pokemon.url);
                updatedPokemonArray.push({
                name: pokemon.name,
                image: details.sprites.front_default, // Pokémon image
                abilities: details.abilities.map(ability => ability.ability.name),
                });


                setPokemonArray(updatedPokemonArray);
            }
            
        }

        const getPokemonDataWithInfo = async (url) => {
            const response = await fetch(url);
            return response.json();
        };
        
        useEffect(() => {
            getPokemonData();
        }, [])
            
     
    return (
        <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center m-auto">Pokemones</h1>

          <div className='container'>
            
            <div id='Pokemon-list' className='grid grid-cols-5 gap-10 w-screen '>
                {pokemonArray.map((pokemon, index) => (
                    <div key={index} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
                        <img src={pokemon.image} alt={pokemon.name} className="w-full h-auto" />
                        <Link to={`/pokemon/${pokemon.name}`}>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
  )
}

export default Pokemones
