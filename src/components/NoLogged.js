import { View, Text, StyleSheet, Buttom } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={StyleSheet.content}>
      <Text style={styles.text}>
        Para ver esta pantalla tienes que iniciar sesión
      </Text>
      <Buttom
        title="Ir al login"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
