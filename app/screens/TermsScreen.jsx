<<<<<<< HEAD
import { View } from "react-native";
import React from "react";
import HomeLoading from "../components/HomeLoading";
=======
import { View, Text, Button, ImageBackground } from "react-native";
import React from "react";
import HomeLoading from "../components/HomeLoading";
import Accept from "../components/buttons/Accept";
import { StyleForTerm } from "../utils/styles/Terms";
>>>>>>> 0947359a918e621303357ab703f1613a13848194

export default function TermsScreen() {
  return (
    <ImageBackground
      source={require("../../assets/triangleBG.png")}
      resizeMode="cover"
      style={StyleForTerm.image}
      imageStyle={{ opacity: 0.15, backgroundColor: "white" }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <HomeLoading />
      </View>
    </ImageBackground>
  );
}
