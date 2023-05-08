import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { getPokemonsFavoriteApi, isPokemonFavoriteApi } from "../api/favorite";

export default function Favorites() {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title="Obtener favorito" onPress={checkFavorites} />
    </SafeAreaView>
  );
}
