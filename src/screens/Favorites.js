import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi, isPokemonFavoriteApi } from "../api/favorite";
import { getPokemonDetailApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function Favorites() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = getPokemonsFavoriteApi();

          const pokemonsArray = [];

          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              types: [
                pokemonDetails.types[0].type.name,
                pokemonDetails.types.length > 1
                  ? pokemonDetails.types[1].type.name
                  : null,
              ],
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}
