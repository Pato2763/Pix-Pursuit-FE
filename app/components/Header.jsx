import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../../assets/Pix-Pursuit.png")}
        style={styles.headerImage}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    paddingTop: height * 0.05,

    alignItems: "center",
    paddingBottom: height * 0.02,
  },
  headerImage: {
    width: width * 0.5,
    height: height * 0.08,
  },
});

export default Header;
