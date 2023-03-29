import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Inciando la Pokedex con React Native</Text>
        <Text>
          Instaladas dependencias: "@react-navigation/bottom-tabs": "^5.11.15",
          "@react-navigation/native": "^5.9.8", "@react-navigation/stack":
          "^5.14.9", "react-native-gesture-handler": "~2.9.0",
          "react-native-reanimated": "~2.14.4",
          "react-native-safe-area-context": "4.5.0", "react-native-screens":
          "~3.20.0", "react-native-vector-icons": "^9.2.0"
        </Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
