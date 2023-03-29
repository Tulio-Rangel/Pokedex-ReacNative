import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from "../screens/Pokedex";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
