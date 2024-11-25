import { View, ImageBackground } from "react-native";
import React from "react";
import HomeLoading from "../components/HomeLoading";
import { StyleForTerm } from "../utils/styles/Terms";

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
