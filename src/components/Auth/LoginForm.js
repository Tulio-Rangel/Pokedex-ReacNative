import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; //Este es el sistema de validacion
import { user, userDetails } from "../../utils/userDB";

export default function LoginForm() {
  //Cambio de estado para cuando se pongan las credenciales mal el usuario reciba un error
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    //validationOnChange: false //Para que la validacion no sea en tiempo real sino cuando se le de submit
    onSubmit: (formValueEntered) => {
      //Se limpia el estado al hacer submit
      setError("");

      const { username, password } = formValueEntered;

      if (username !== user.username || password !== user.password) {
        //aqui se dispara el error
        setError("Usuario o contrasena incorrectos");
      } else {
        console.log("Usuario loggeado");
        console.log(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Enter" onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      {/* aqui se invoca el error si las credenciales son incorrectas y definimos en const [error, setError] = useState("");  */}
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
