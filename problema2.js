// Problema 2:  Genere una serie de funciones (Una por cada ítem) que consuma de la página de https://pokeapi.co/ y retorne lo siguiente:
import fetch from "node-fetch";

const fecthPokemon = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const pokemon = await response.json();
  return pokemon;
};
const fetchPokemonNameorId = async (item) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`);
  const pokemon = await response.json();
  return pokemon;
};

// Suma total de pokemones por tipo, debe recibir el tipo en string.
const sumPokemonByType = async (type) => {
  const pokemon = await fecthPokemon(type);
  return pokemon.pokemon.length;
};
//Solucion 1: 
// sumPokemonByType("normal").then(value => console.log("SumPokemonByType", value));

// Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.
const twoPokemonTypes = async (type1, type2) => {
  const pokemon1 = await fecthPokemon(type1);
  const pokemon2 = await fecthPokemon(type2);
  const pokemons = pokemon1.pokemon.concat(pokemon2.pokemon);
  return pokemons;
};
// Solucion 2:
// twoPokemonTypes('normal', 'ground').then(pokemons => console.log("Two Pokemon Types", pokemons));

// Dado el nombre de un pokémon retornar el número del mismo.
const getPokemonByName = async (name) => {
  const pokemon = await fetchPokemonNameorId(name);
  return pokemon.id;
};
// Solucion 3:
// getPokemonByName('clefairy').then(value => console.log("Get Pokemon By Name", value));

// Dado el número de un pokémon retornar un objeto con sus 6 stats base.
const statsPokemon = async (id) => {
  const obj = {};

  const pokemon = await fetchPokemonNameorId(id);
  Object.assign(obj, pokemon.stats);
  return obj;
};
//Solucion 4:
// statsPokemon(1).then(value => console.log("Stats Pokemon", value));

// Realizar una función que reciba un arreglo de números (Ids de pokémon) y un ordenador y retorne los pokémon en un arreglo con su nombre, tipo y peso ordenados según se indique por la función por uno de estos 3 indicadores.
const orderPokemon = async (pokemons, order) => {
  const orderedPokemons = [];
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = await fetchPokemonNameorId(pokemons[i]);
    orderedPokemons.push({
      name: pokemon.name,
      type: pokemon.types.map((type) => type.type.name),
      weight: pokemon.weight,
    });
  }
  return orderedPokemons.sort((a, b) => {
    if (order === "name") {
      return a.name > b.name ? 1 : -1;
    } else if (order === "type") {
      return a.type > b.type ? 1 : -1;
    } else if (order === "weight") {
      return a.weight > b.weight ? 1 : -1;
    }
  });
};
//Solucion 5:
//orderPokemon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'type').then(value => console.log("Order Pokemon", value));

// Recibir un número y un tipo (de pokémon) y retornar un true o false si el pokémon de ese número posee este tipo.
const checkPokemonType = async (id, type) => {
  const pokemon = await fetchPokemonNameorId(id);
  return pokemon.types.map((item) => item.type.name).includes(type);
};
//Solucion 6:
// checkPokemonType(1, 'grass').then(value => console.log("Check Pokemon Type", value));
// al ser BulBasaur un pokémon de tipo planta, retorna true.
