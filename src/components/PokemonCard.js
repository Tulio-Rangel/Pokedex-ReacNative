import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
//Lo usare para al darle a un pokemon me lleve a su info
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  //console.log(`Tipos de pokemon: ${pokemon.types}`);
  const pokemonColor = getColorByPokemonType(pokemon.types);
  //console.log(`Colores de pokemon: ${pokemonColor}`);

  const gradientColors = pokemonColor.map((color) => color || pokemonColor[0]);

  //console.log(`Gradientes de pokemon: ${gradientColors}`);

  //con el ...operator copiamos lo que esta en bgStyle(en styles) y lo pegamos en y lo pegamos en esta constante que estamos haciendo
  const bgStyles = {
    ...styles.bgStyles,
    backgroundColor: pokemonColor[0],
  };

  const goToPokemon = () => {
    //console.log(`Vamos al pokemon: ${pokemon.id}`);
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={bgStyles}
          >
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </LinearGradient>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    //paddingTop: 20,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
});
