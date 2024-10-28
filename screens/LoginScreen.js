import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function LoginScreen(props) {
  return (
      <View style={styles.container}>
      {/* <Text style={StyleSheet.text}>Login Screen</Text> */}
      <Button
      title='Go to Sign Up'
      onPress={() => {
        props.navigation.navigate("SignUp")
        }}
    />
      <Button
      title='Go Back'
      onPress={() => {
        props.navigation.navigate("Error")
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffa",
  },
  text: {
    fontSize: 18,
    marginottom: 20,
  },
});