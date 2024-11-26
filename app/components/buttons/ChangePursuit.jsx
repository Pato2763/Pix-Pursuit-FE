import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChangePursuit = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={Styles.changePursuitBtn}
        onPress={() => {
          navigation.navigate("ChoosePursuits");
        }}
      >
        <Text>Change Pursuit</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  changePursuitBtn: {
    width: 150,
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    color: "white",
    borderColor: "#D9D9D9",
    borderWidth: 2,
    color: "black",
    backgroundColor: "white",
  },
});

export default ChangePursuit;
