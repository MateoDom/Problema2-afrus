// Problema 2:  Genere una serie de funciones (Una por cada ítem) que consuma de la página de https://pokeapi.co/ y retorne lo siguiente:
// Suma total de pokemones por tipo, debe recibir el tipo en string.
// Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.
// Dado el nombre de un pokémon retornar el número del mismo.
// Dado el número de un pokémon retornar un objeto con sus 6 stats base.
// Realizar una función que reciba un arreglo de números (Ids de pokémon) y un ordenador y retorne los pokémon en un arreglo con su nombre, tipo y peso ordenados según se indique por la función por uno de estos 3 indicadores.
// Recibir un número y un tipo (de pokémon) y retornar un true o false si el pokémon de ese número posee este tipo.
import fetch from "node-fetch";

const fecthPokemon = async (type) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const pokemon = await response.json();
    return pokemon;
}
const sumPokemonByType = async (type) => {
    const pokemon = await fecthPokemon(type);
    return pokemon.pokemon.length;
}
sumPokemonByType("normal").then(value => console.log("SumPokemonByType", value));



const twoPokemonTypes = async (type1, type2) => {
    const pokemon1 = await fecthPokemon(type1);
    const pokemon2 = await fecthPokemon(type2);
    const pokemons = pokemon1.pokemon.concat(pokemon2.pokemon);
    return pokemons;
}
twoPokemonTypes('normal', 'ground').then(pokemons => console.log("Two Pokemon Types", pokemons.length));


const getPokemonByName = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();
    return pokemon.id;
}
getPokemonByName('clefairy').then(value => console.log("Get Pokemon By Name", value));