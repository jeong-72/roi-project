import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      {/* <Text style={StyleSheet.text}>SignUp Screen</Text> */}
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title="Go to Error"
        onPress={() => {
          props.navigation.navigate("Error");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginottom: 20,
  },
});
