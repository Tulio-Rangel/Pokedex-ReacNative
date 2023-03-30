import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { getPokemonDetailApi } from "../api/pokemon";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  //Estado pokemon y luego la funcion que actualiza el estado, que inicialmente es nulo
  const [pokemon, setPokemon] = useState(null);

  //console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailApi(params.id);
        setPokemon(response);
      } catch (error) {
        //En caso de que haya un pokemon malo o algo asi, se devuelve a la pokedex
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
}
