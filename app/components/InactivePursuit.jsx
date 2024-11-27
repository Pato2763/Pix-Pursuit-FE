import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import ChoosePursuit from "./buttons/ChoosePursuit";

const InactivePursuit = () => {
  return (
    <View style={Styles.CurrentPursuitContainer}>
      <Text style={Styles.title}>Your pursuit is now inactive</Text>
      <Text style={Styles.desc}>
        Unfortunately you have ran out of time trying to complete your current
        pursuit and it is now inactive. Please click the button below to choose
        a different pursuit and try again !
      </Text>
      <View style={Styles.ButtonContainer}>
        <ChoosePursuit />
      </View>
    </View>
  );
};

export default InactivePursuit;

const Styles = StyleSheet.create({
  CurrentPursuitContainer: {
    width: 350,
    marginTop: 20,
    margin: "auto",
    marginBottom: "20",
    borderRadius: 10,
    paddingVertical: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    backgroundColor: "rgba(300, 300, 300, 0.8)",
  },
  ButtonContainer: {
    flexDirection: "row",
    margin: "auto",
    marginTop: "10",
    gap: 10,
  },
  pursuitImage: {
    height: 350,
    width: 300,
    margin: "auto",
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  desc: {
    textAlign: "center",
    marginBottom: 30,
  },
});
