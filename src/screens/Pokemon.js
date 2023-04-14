import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Favorite from "../components/Pokemon/Favorite";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  //Estado pokemon y luego la funcion que actualiza el estado, que inicialmente es nulo
  const [pokemon, setPokemon] = useState(null);

  //console.log(params.id);

  //Cambio de la flecha back por defecto y agregar el icono de favoritos
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Favorite />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]); //Para cada vez que cambie de navigation o de parametro esto se vuelve a ejecutar

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
        order={pokemon.id}
        image={pokemon.sprites.other["official-artwork"].front_default}
        types={[
          pokemon.types[0].type.name,
          pokemon.types.length > 1 ? pokemon.types[1].type.name : null,
        ]}
      />
      <Type
        types={[
          pokemon.types[0].type.name,
          pokemon.types.length > 1 ? pokemon.types[1].type.name : null,
        ]}
      />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
