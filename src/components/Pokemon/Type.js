import { View, Text, StyleSheet } from "react-native";
import React from "react";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type(props) {
  const { types } = props;
  //console.log("Los tipos son:", types);
  return (
    <View style={styles.content}>
      {types.map((type, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType([type])[0],
          }}
        >
          <Text style={styles.typeName}>{type}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    //paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  typeName: {
    //color: "#fff",
    fontWeight: "bold",
    //fontSize: 27,
    textTransform: "capitalize",
  },
});
