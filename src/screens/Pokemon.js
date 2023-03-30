import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { getPokemonDetailApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";

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
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        types={[
          pokemon.types[0].type.name,
          pokemon.types.length > 1 ? pokemon.types[1].type.name : null,
        ]}
      />
    </ScrollView>
  );
}
