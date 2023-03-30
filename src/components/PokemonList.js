import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemon, loadPokemon, isNext, isLoading } = props;

  const loadMore = () => {
    loadPokemon();
  };

  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(xPokemon) => String(xPokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={!isLoading && isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isLoading &&
        isNext && <ActivityIndicator size="large" style={styles.spinner} />
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    //marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
    //marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});
