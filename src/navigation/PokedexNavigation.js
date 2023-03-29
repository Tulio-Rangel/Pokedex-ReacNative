import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
