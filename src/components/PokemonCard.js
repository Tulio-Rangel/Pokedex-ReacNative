import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const { pokemon } = props;

  //con el ...operator copiamos lo que esta en bgStyle(en styles) y lo pegamos en y lo pegamos en esta constante que estamos haciendo
  const bgStyles = { backgroundColor: "#f0f", ...styles.bgStyles };

  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
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
