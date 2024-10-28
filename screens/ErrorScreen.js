import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ErrorScreen(props) {
  return (
    <View style={styles.container}>
      {/* <Text style={StyleSheet.text}>Error Screen</Text> */}
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
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
