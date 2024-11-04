import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.text}>SignUp Screen</Text>
        <View style={styles.fixToText}>
          <Button
            title="Go Login"
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          />
          <Button
            title="Goto Error"
            onPress={() => {
              props.navigation.navigate("Error", {
                errorMessage: "SignUp failed. Please try again later.",
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
