import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";

export default function UserData() {
  const { auth, logout } = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastname}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastname}`} />
        <ItemMenu title="Username" text={auth.usename} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favorites" text={`0 pokemon`} />
      </View>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
});
