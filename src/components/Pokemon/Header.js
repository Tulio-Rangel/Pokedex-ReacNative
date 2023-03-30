import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
  //console.log(props);
  const { name, order, image, types } = props;
  const pokemonColor = getColorByPokemonType(types);
  //console.log(color);
  const bgStyle = [{ backgroundColor: pokemonColor[0], ...styles.bg }];
  const gradientColors = pokemonColor.map((color) => color || pokemonColor[0]);

  return (
    //Se elimina el view que estaba envolvindo todo, se deja vacio (esto se llama framer.. creo)
    <>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={bgStyle}
      />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
    textTransform: "capitalize",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
});
