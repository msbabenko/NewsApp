import React from "react";
import { Text, View, StyleSheet } from "react-native";



// -- Main (Home) Screen render
export const HomeScreen = () => (

  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Home!</Text>
</View>
);

  const styles = StyleSheet.create({
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      },
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }
  });
