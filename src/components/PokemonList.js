import { Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemon } = props;
  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(xPokemon) => String(xPokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
