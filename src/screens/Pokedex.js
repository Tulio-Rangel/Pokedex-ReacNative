import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  console.log("Pokemon--->", pokemon);
  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi();
      const pokemonArray = [];

      //Ejecutar en bucle async el array que me devuelve la api
      //Es response.result porque el el response que estamos recibiendo de getPokemonApi, la propiedad result es la que trae el array de pokemon
      for await (const iPokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(iPokemon.url);
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          types: [
            pokemonDetails.types[0].type.name,
            pokemonDetails.types.length > 1
              ? pokemonDetails.types[1].type.name
              : null,
          ],
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemon([...pokemon, ...pokemonArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
