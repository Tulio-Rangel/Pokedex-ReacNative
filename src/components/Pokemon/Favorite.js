import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
//import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "reac-native-vector-icons/FontAwesome";
import {
  addPokemonFavorite,
  isPokemonFavoriteApi,
  getPokemonsFavoriteApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  const [isFavorite, setIsFavorite] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  const addFavorite = async () => {
    await addPokemonFavorite(id);
  };

  const removeFavorite = () => {
    console.log("Eliminar de favoritos");
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
