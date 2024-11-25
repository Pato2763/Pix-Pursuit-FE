import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const ToggleImage = ({ showingMap, setShowingMap, pursuitImage }) => {
  const handleClick = () => {
    setShowingMap(!showingMap);
    console.log(pursuitImage);
  };
  return (
    <View>
      <TouchableOpacity style={Styles.button} onPress={handleClick}>
        <Text style={Styles.text}>
          {showingMap ? "Show Pursuit image" : "Show Pursuit map"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  button: {
    margin: "auto",
    marginBottom: 15,
  },
  text: {
    textDecorationLine: "underline",
  },
});

export default ToggleImage;
